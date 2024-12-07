use anchor_lang::prelude::*;
use crate::constants::*;
use crate::errors::InsuranceFundError;
use crate::states::*;
use crate::events::*;
use anchor_spl::token::{
    Mint,
    Token,
    TokenAccount,
    Transfer,
    transfer
};

#[derive(AnchorDeserialize, AnchorSerialize)]
pub struct SlashPoolArgs {
    pub lockup_id: u64,
    pub slash_id: u64,
}

pub fn slash_pool(
    ctx: Context<SlashPool>,
    args: SlashPoolArgs
) -> Result<()> {
    let SlashPoolArgs {
        lockup_id,
        slash_id: _
    } = args;

    let settings = &ctx.accounts.settings;
    let slash = &ctx.accounts.slash;
    let token_program = &ctx.accounts.token_program;
    let asset = &mut ctx.accounts.asset;

    let lockup = &mut ctx.accounts.lockup;
    let signer_seeds = &[
        LOCKUP_SEED.as_bytes(),
        &lockup_id.to_le_bytes(),
        &[lockup.bump]
    ];

    let destination = &ctx.accounts.destination;
    let asset_lockup = &ctx.accounts.asset_lockup;

    let hot_wallet_withdrawal = slash.slashed_amount
        .checked_mul(settings.shares_config.hot_wallet_share_bps)
        .ok_or(InsuranceFundError::MathOverflow)?
        .checked_div(10_000)
        .ok_or(InsuranceFundError::MathOverflow)?;

    transfer(
        CpiContext::new_with_signer(
            token_program.to_account_info(), 
            Transfer {
                authority: lockup.to_account_info(),
                to: destination.to_account_info(),
                from: asset_lockup.to_account_info()
            },
            &[signer_seeds]
        ),
        hot_wallet_withdrawal
    )?;

    lockup.slash_state.amount += slash.slashed_amount;
    lockup.slash_state.index += 1;
    lockup.unlock();
    lockup.decrease_deposits(slash.slashed_amount)?;

    asset.decrease_tvl(slash.slashed_amount)?;

    emit!(FinalizeSlash {
        id: slash.index,
        amount: slash.slashed_amount,
    });

    Ok(())
}

#[derive(Accounts)]
#[instruction(
    args: SlashPoolArgs
)]
pub struct SlashPool<'info> {
    #[account(
        mut,
    )]
    pub signer: Signer<'info>,

    #[account(
        mut,
        constraint = admin.address == signer.key() @ InsuranceFundError::InvalidSigner,
        constraint = admin.has_permissions(Permissions::Superadmin) @ InsuranceFundError::PermissionsTooLow,
    )]
    pub admin: Account<'info, Admin>,

    #[account(
        mut,
        seeds = [
            SETTINGS_SEED.as_bytes()
        ],
        bump,
        constraint = !settings.frozen @ InsuranceFundError::Frozen
    )]
    pub settings: Account<'info, Settings>,

    #[account(
        mut,
        seeds = [
            LOCKUP_SEED.as_bytes(),
            &args.lockup_id.to_le_bytes()
        ],
        bump,
    )]
    pub lockup: Account<'info, Lockup>,

    #[account(
        mut,
        seeds = [
            SLASH_SEED.as_bytes(),
            lockup.key().as_ref(),
            &args.slash_id.to_le_bytes()
        ],
        bump,
        // All deposits have to be slashed before slashing the pool.
        constraint = slash.target_accounts == slash.slashed_accounts @ InsuranceFundError::DepositsNotSlashed,
        // Cold wallet has to be slashed before slashing the pool
        constraint = slash.slashed_cold_wallet @ InsuranceFundError::ColdWalletNotSlashed,
        // Enforce using latest `slash` account.
        constraint = slash.index == lockup.slash_state.index @ InsuranceFundError::InvalidInput,
    )]
    pub slash: Account<'info, Slash>,

    #[account(
        mut,
        address = lockup.asset
    )]
    pub asset_mint: Account<'info, Mint>,

    #[account(
        mut,
        seeds = [
            ASSET_SEED.as_bytes(),
            &asset_mint.key().to_bytes()
        ],
        bump,
    )]
    pub asset: Account<'info, Asset>,

    #[account(
        mut,
        seeds = [
            VAULT_SEED.as_bytes(),
            lockup.key().as_ref(),
            asset_mint.key().as_ref()
        ],
        bump,
        constraint = asset_lockup.amount >= slash.slashed_amount * settings.shares_config.hot_wallet_share_bps / 10_000 @ InsuranceFundError::NotEnoughFundsToSlash
    )]
    pub asset_lockup: Account<'info, TokenAccount>,

    #[account(
        mut,
        token::mint = asset_mint,
    )]
    pub destination: Account<'info, TokenAccount>,

    #[account()]
    pub token_program: Program<'info, Token>
}