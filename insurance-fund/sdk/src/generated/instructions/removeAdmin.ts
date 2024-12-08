/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import { RemoveAdminArgs, removeAdminArgsBeet } from '../types/RemoveAdminArgs'

/**
 * @category Instructions
 * @category RemoveAdmin
 * @category generated
 */
export type RemoveAdminInstructionArgs = {
  args: RemoveAdminArgs
}
/**
 * @category Instructions
 * @category RemoveAdmin
 * @category generated
 */
export const removeAdminStruct = new beet.BeetArgsStruct<
  RemoveAdminInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', removeAdminArgsBeet],
  ],
  'RemoveAdminInstructionArgs'
)
/**
 * Accounts required by the _removeAdmin_ instruction
 *
 * @property [_writable_, **signer**] signer
 * @property [_writable_] admin
 * @property [_writable_] adminToRemove
 * @property [_writable_] settings
 * @category Instructions
 * @category RemoveAdmin
 * @category generated
 */
export type RemoveAdminInstructionAccounts = {
  signer: web3.PublicKey
  admin: web3.PublicKey
  adminToRemove: web3.PublicKey
  settings: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const removeAdminInstructionDiscriminator = [
  74, 202, 71, 106, 252, 31, 72, 183,
]

/**
 * Creates a _RemoveAdmin_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category RemoveAdmin
 * @category generated
 */
export function createRemoveAdminInstruction(
  accounts: RemoveAdminInstructionAccounts,
  args: RemoveAdminInstructionArgs,
  programId = new web3.PublicKey('EiMoMLXBCKpxTdBwK2mBBaGFWH1v2JdT5nAhiyJdF3pV')
) {
  const [data] = removeAdminStruct.serialize({
    instructionDiscriminator: removeAdminInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.signer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.admin,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.adminToRemove,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.settings,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
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