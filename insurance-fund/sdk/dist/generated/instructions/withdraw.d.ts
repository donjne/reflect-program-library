/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { WithdrawArgs } from '../types/WithdrawArgs';
/**
 * @category Instructions
 * @category Withdraw
 * @category generated
 */
export type WithdrawInstructionArgs = {
    args: WithdrawArgs;
};
/**
 * @category Instructions
 * @category Withdraw
 * @category generated
 */
export declare const withdrawStruct: beet.BeetArgsStruct<WithdrawInstructionArgs & {
    instructionDiscriminator: number[];
}>;
/**
 * Accounts required by the _withdraw_ instruction
 *
 * @property [_writable_, **signer**] user
 * @property [_writable_] settings
 * @property [_writable_] lockup
 * @property [_writable_] deposit
 * @property [_writable_] cooldown
 * @property [_writable_] assetMint
 * @property [_writable_] asset
 * @property [_writable_] userAssetAta
 * @property [_writable_] rewardMint
 * @property [_writable_] userRewardAta
 * @property [_writable_] lockupAssetVault
 * @property [_writable_] assetRewardPool
 * @property [] clock
 * @category Instructions
 * @category Withdraw
 * @category generated
 */
export type WithdrawInstructionAccounts = {
    user: web3.PublicKey;
    settings: web3.PublicKey;
    lockup: web3.PublicKey;
    deposit: web3.PublicKey;
    cooldown: web3.PublicKey;
    assetMint: web3.PublicKey;
    asset: web3.PublicKey;
    userAssetAta: web3.PublicKey;
    rewardMint: web3.PublicKey;
    userRewardAta: web3.PublicKey;
    lockupAssetVault: web3.PublicKey;
    assetRewardPool: web3.PublicKey;
    tokenProgram?: web3.PublicKey;
    clock: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};
export declare const withdrawInstructionDiscriminator: number[];
/**
 * Creates a _Withdraw_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Withdraw
 * @category generated
 */
export declare function createWithdrawInstruction(accounts: WithdrawInstructionAccounts, args: WithdrawInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;