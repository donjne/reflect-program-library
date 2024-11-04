/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  ManageFreezeArgs,
  manageFreezeArgsBeet,
} from '../types/ManageFreezeArgs'

/**
 * @category Instructions
 * @category ManageFreeze
 * @category generated
 */
export type ManageFreezeInstructionArgs = {
  args: ManageFreezeArgs
}
/**
 * @category Instructions
 * @category ManageFreeze
 * @category generated
 */
export const manageFreezeStruct = new beet.BeetArgsStruct<
  ManageFreezeInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', manageFreezeArgsBeet],
  ],
  'ManageFreezeInstructionArgs'
)
/**
 * Accounts required by the _manageFreeze_ instruction
 *
 * @property [_writable_, **signer**] superadmin
 * @property [_writable_] settings
 * @category Instructions
 * @category ManageFreeze
 * @category generated
 */
export type ManageFreezeInstructionAccounts = {
  superadmin: web3.PublicKey
  settings: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const manageFreezeInstructionDiscriminator = [
  163, 151, 84, 239, 6, 113, 250, 208,
]

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
export function createManageFreezeInstruction(
  accounts: ManageFreezeInstructionAccounts,
  args: ManageFreezeInstructionArgs,
  programId = new web3.PublicKey('BXopfEhtpSHLxK66tAcxY7zYEUyHL6h91NJtP2nWx54e')
) {
  const [data] = manageFreezeStruct.serialize({
    instructionDiscriminator: manageFreezeInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.superadmin,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.settings,
      isWritable: true,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}