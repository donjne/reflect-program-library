/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  DepositRewardsArgs,
  depositRewardsArgsBeet,
} from '../types/DepositRewardsArgs'

/**
 * @category Instructions
 * @category DepositRewards
 * @category generated
 */
export type DepositRewardsInstructionArgs = {
  args: DepositRewardsArgs
}
/**
 * @category Instructions
 * @category DepositRewards
 * @category generated
 */
export const depositRewardsStruct = new beet.BeetArgsStruct<
  DepositRewardsInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', depositRewardsArgsBeet],
  ],
  'DepositRewardsInstructionArgs'
)
/**
 * Accounts required by the _depositRewards_ instruction
 *
 * @property [_writable_, **signer**] caller
 * @property [_writable_] settings
 * @property [_writable_] lockup
 * @property [_writable_] rewardMint
 * @property [_writable_] callerRewardAta
 * @property [_writable_] assetRewardPool
 * @property [_writable_] receiptTokenMint
 * @property [_writable_] lockupCooldownVault
 * @category Instructions
 * @category DepositRewards
 * @category generated
 */
export type DepositRewardsInstructionAccounts = {
  caller: web3.PublicKey
  settings: web3.PublicKey
  lockup: web3.PublicKey
  rewardMint: web3.PublicKey
  callerRewardAta: web3.PublicKey
  assetRewardPool: web3.PublicKey
  receiptTokenMint: web3.PublicKey
  lockupCooldownVault: web3.PublicKey
  tokenProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const depositRewardsInstructionDiscriminator = [
  52, 249, 112, 72, 206, 161, 196, 1,
]

/**
 * Creates a _DepositRewards_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category DepositRewards
 * @category generated
 */
export function createDepositRewardsInstruction(
  accounts: DepositRewardsInstructionAccounts,
  args: DepositRewardsInstructionArgs,
  programId = new web3.PublicKey('2MN1Dbnu7zM9Yj4ougn6ZCNNKevrSvi9AR56iawzkye8')
) {
  const [data] = depositRewardsStruct.serialize({
    instructionDiscriminator: depositRewardsInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.caller,
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
      pubkey: accounts.rewardMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.callerRewardAta,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.assetRewardPool,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.receiptTokenMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.lockupCooldownVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
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
