use anchor_lang::prelude::*;
use crate::states::*;
use crate::constants::*;
use crate::errors::InsuranceFundError;
use anchor_spl::token::{
    Mint,
    TokenAccount,
    Transfer,
    transfer,
    Token
};
use crate::events::ProcessIntent as ProcessIntentEvent;

#[derive(AnchorDeserialize, AnchorSerialize)]
pub struct ProcessIntentArgs {
    deposit_id: u64
}

pub fn process_intent(
    ctx: Context<ProcessIntent>,
    args: ProcessIntentArgs
) -> Result<()> {

    let token_program = &ctx.accounts.token_program;
    let signer = &ctx.accounts.signer;
    let admin_asset_ata = &ctx.accounts.admin_asset_ata;
    let user_asset_ata = &ctx.accounts.user_asset_ata;
    let intent = &ctx.accounts.intent;
    let deposit = &mut ctx.accounts.deposit;
    let asset = &mut ctx.accounts.asset;

    transfer(
        CpiContext::new(
            token_program.to_account_info(), 
            Transfer {
                authority: signer.to_account_info(),
                from: admin_asset_ata.to_account_info(),
                to: user_asset_ata.to_account_info()
            }
        ),
        intent.amount
    )?;

    deposit.amount = deposit
            .amount
            .checked_sub(intent.amount)
            .ok_or(InsuranceFundError::MathOverflow)?;

    asset.decrease_tvl(intent.amount)?;
    
    emit!(
        ProcessIntentEvent {
            amount: intent.amount,
            deposit: deposit.key(),
            processed_by: signer.key(),
        }
    );

    Ok(())
}

#[derive(Accounts)]
#[instruction(
    args: ProcessIntentArgs
)]
pub struct ProcessIntent<'info> {
    #[account(
        mut
    )]
    pub signer: Signer<'info>,

    #[account(
        mut,
        constraint = admin.address == signer.key() @ InsuranceFundError::InvalidSigner,
        constraint = admin.has_permissions(Permissions::Superadmin) @ InsuranceFundError::PermissionsTooLow
    )]
    pub admin: Account<'info, Admin>,

    /// CHECK: Receiver, directly checking if the addresses match
    #[account(
        mut,
        address = deposit.user
    )]
    pub user: UncheckedAccount<'info>,

    #[account(
        mut,
        seeds = [
            SETTINGS_SEED.as_bytes()
        ],
        bump,
        constraint = !settings.frozen @ InsuranceFundError::Frozen,
    )]
    pub settings: Account<'info, Settings>,

    #[account(
        mut,
        seeds = [
            DEPOSIT_SEED.as_bytes(),
            intent.lockup.as_ref(),
            &args.deposit_id.to_le_bytes()
        ],
        bump,
        // Enforce account ownership
        has_one = user,
        // Enforce matching lockup
        has_one = lockup,
    )]
    pub deposit: Account<'info, Deposit>,

    #[account(
        mut,
        seeds = [
            INTENT_SEED.as_bytes(),
            &deposit.key().to_bytes(),
        ],
        bump,
        close = signer,
    )]
    pub intent: Account<'info, Intent>,

    #[account(
        mut,
        address = intent.lockup,
    )]
    pub lockup: Account<'info, Lockup>,

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
        address = lockup.asset
    )]
    pub asset_mint: Account<'info, Mint>,

    #[account(
        mut,
        token::authority = signer,
        token::mint = asset_mint
    )]
    pub admin_asset_ata: Account<'info, TokenAccount>,

    #[account(
        mut,
        token::authority = user,
        token::mint = asset_mint
    )]
    pub user_asset_ata: Account<'info, TokenAccount>,

    #[account(
        
    )]
    pub token_program: Program<'info, Token>,
}