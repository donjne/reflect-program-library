use anchor_lang::prelude::*;

use crate::constants::*;
use crate::errors::InsuranceFundError;
use crate::states::*;
use crate::borsh::*;
use anchor_spl::token::{
    Token,
    TokenAccount,
    Mint
};

#[derive(BorshDeserialize, BorshSerialize)]
pub struct InitializeSlashArgs {
    lockup_id: u64,
    amount: u64,
}

pub fn initialize_slash(
    ctx: Context<InitializeSlash>,
    args: InitializeSlashArgs
) -> Result<()> {
    let InitializeSlashArgs {
        amount,
        lockup_id
    } = args;

    let lockup = &mut ctx.accounts.lockup;
    let slash = &mut ctx.accounts.slash;
    let settings = &mut ctx.accounts.settings;
    
    settings.deposits_locked = true;

    slash.index = lockup.slash_state.index;
    slash.target_accounts = lockup.deposits;
    slash.target_amount = amount;
    slash.slashed_accounts = 0;
    slash.slashed_amount = 0;

    Ok(())
}

#[derive(Accounts)]
#[instruction(
    args: InitializeSlashArgs
)]
pub struct InitializeSlash<'info> {
    #[account(
        mut,
        address = settings.superadmin
    )]
    pub superadmin: Signer<'info>,

    #[account(
        mut,
        seeds = [
            SETTINGS_SEED.as_bytes()
        ],
        bump,
        has_one = superadmin,
        // Constraint to make sure that the previous slash has been finalised.
        constraint = !settings.deposits_locked @ InsuranceFundError::DepositsLocked
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
        address = lockup.asset
    )]
    pub asset_mint: Account<'info, Mint>,

    #[account(
        mut,
        seeds = [
            VAULT_SEED.as_bytes(),
            lockup.key().as_ref(),
            asset_mint.key().as_ref(),
        ],
        bump,
        token::mint = asset_mint,
        token::authority = lockup,
        constraint = asset_lockup.amount >= args.amount @ InsuranceFundError::NotEnoughFundsToSlash
    )]
    pub asset_lockup: Account<'info, TokenAccount>,

    #[account(
        init,
        seeds = [
            SLASH_SEED.as_bytes(),
            lockup.key().as_ref(),
            &lockup.slash_state.index.to_le_bytes()
        ],
        bump,
        payer = superadmin,
        space = Slash::LEN
    )]
    pub slash: Account<'info, Slash>,
    
    #[account()]
    pub token_program: Program<'info, Token>,

    #[account()]
    pub system_program: Program<'info, System>,
}