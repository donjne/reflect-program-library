/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { AddAdminArgs } from '../types/AddAdminArgs';
/**
 * @category Instructions
 * @category AddAdmin
 * @category generated
 */
export type AddAdminInstructionArgs = {
    args: AddAdminArgs;
};
/**
 * @category Instructions
 * @category AddAdmin
 * @category generated
 */
export declare const addAdminStruct: beet.BeetArgsStruct<AddAdminInstructionArgs & {
    instructionDiscriminator: number[];
}>;
/**
 * Accounts required by the _addAdmin_ instruction
 *
 * @property [_writable_, **signer**] signer
 * @property [_writable_] existingAdmin
 * @property [_writable_] newAdmin
 * @property [_writable_] settings
 * @category Instructions
 * @category AddAdmin
 * @category generated
 */
export type AddAdminInstructionAccounts = {
    signer: web3.PublicKey;
    existingAdmin: web3.PublicKey;
    newAdmin: web3.PublicKey;
    settings: web3.PublicKey;
    systemProgram?: web3.PublicKey;
    anchorRemainingAccounts?: web3.AccountMeta[];
};
export declare const addAdminInstructionDiscriminator: number[];
/**
 * Creates a _AddAdmin_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category AddAdmin
 * @category generated
 */
export declare function createAddAdminInstruction(accounts: AddAdminInstructionAccounts, args: AddAdminInstructionArgs, programId?: web3.PublicKey): web3.TransactionInstruction;
