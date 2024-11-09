/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  BoostRewardsArgs,
  boostRewardsArgsBeet,
} from '../types/BoostRewardsArgs'

/**
 * @category Instructions
 * @category BoostRewards
 * @category generated
 */
export type BoostRewardsInstructionArgs = {
  args: BoostRewardsArgs
}
/**
 * @category Instructions
 * @category BoostRewards
 * @category generated
 */
export const boostRewardsStruct = new beet.BeetArgsStruct<
  BoostRewardsInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', boostRewardsArgsBeet],
  ],
  'BoostRewardsInstructionArgs'
)
/**
 * Accounts required by the _boostRewards_ instruction
 *
 * @property [_writable_, **signer**] superadmin
 * @property [_writable_] settings
 * @property [_writable_] lockup
 * @property [_writable_] rewardBoost
 * @category Instructions
 * @category BoostRewards
 * @category generated
 */
export type BoostRewardsInstructionAccounts = {
  superadmin: web3.PublicKey
  settings: web3.PublicKey
  lockup: web3.PublicKey
  rewardBoost: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const boostRewardsInstructionDiscriminator = [
  198, 166, 33, 151, 29, 82, 245, 51,
]

/**
 * Creates a _BoostRewards_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category BoostRewards
 * @category generated
 */
export function createBoostRewardsInstruction(
  accounts: BoostRewardsInstructionAccounts,
  args: BoostRewardsInstructionArgs,
  programId = new web3.PublicKey('EiMoMLXBCKpxTdBwK2mBBaGFWH1v2JdT5nAhiyJdF3pV')
) {
  const [data] = boostRewardsStruct.serialize({
    instructionDiscriminator: boostRewardsInstructionDiscriminator,
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
    {
      pubkey: accounts.lockup,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.rewardBoost,
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
