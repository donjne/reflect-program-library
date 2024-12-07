/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { ManageFreezeArgs } from '../types/ManageFreezeArgs';
/**
 * @category Instructions
 * @category ManageFreeze
 * @category generated
 */
export type ManageFreezeInstructionArgs = {
    args: ManageFreezeArgs;
};
/**
 * @category Instructions
 * @category ManageFreeze
 * @category generated
 */
export declare const manageFreezeStruct: beet.BeetArgsStruct<ManageFreezeInstructionArgs & {
    instructionDiscriminator: number[];
}>;
/**
 * Accounts required by the _manageFreeze_ instruction
 *
 * @property [_writable_, **signer**] signer
 * @property [_writable_] admin
 * @property [_writable_] settings
 * @category Instructions
 * @category ManageFreeze
 * @category generated
 */
export type ManageFreezeInstructionAccounts = {
    signer: web3.PublicKey;
    admin: web3.PublicKey;
    settings: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};
export declare const manageFreezeInstructionDiscriminator: number[];
/**
 * Creates a _ManageFreeze_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category ManageFreeze
 * @category generated
 */
export declare function createManageFreezeInstruction(accounts: ManageFreezeInstructionAccounts, args: ManageFreezeInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;