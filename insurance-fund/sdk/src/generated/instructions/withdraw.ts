/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import { WithdrawArgs, withdrawArgsBeet } from '../types/WithdrawArgs'

/**
 * @category Instructions
 * @category Withdraw
 * @category generated
 */
export type WithdrawInstructionArgs = {
  args: WithdrawArgs
}
/**
 * @category Instructions
 * @category Withdraw
 * @category generated
 */
export const withdrawStruct = new beet.BeetArgsStruct<
  WithdrawInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', withdrawArgsBeet],
  ],
  'WithdrawInstructionArgs'
)
/**
 * Accounts required by the _withdraw_ instruction
 *
 * @property [_writable_, **signer**] user
 * @property [_writable_] settings
 * @property [_writable_] lockup
 * @property [_writable_] receiptTokenMint
 * @property [_writable_] deposit
 * @property [_writable_] depositReceiptTokenAccount
 * @property [_writable_] cooldown
 * @property [_writable_] assetMint
 * @property [_writable_] asset
 * @property [_writable_] userAssetAta
 * @property [_writable_] rewardMint
 * @property [_writable_] userRewardAta
 * @property [_writable_] lockupHotVault
 * @property [_writable_] lockupColdVault
 * @property [_writable_] assetRewardPool
 * @property [_writable_] lockupCooldownVault
 * @property [_writable_] intent (optional)
 * @category Instructions
 * @category Withdraw
 * @category generated
 */
export type WithdrawInstructionAccounts = {
  user: web3.PublicKey
  settings: web3.PublicKey
  lockup: web3.PublicKey
  receiptTokenMint: web3.PublicKey
  deposit: web3.PublicKey
  depositReceiptTokenAccount: web3.PublicKey
  cooldown: web3.PublicKey
  assetMint: web3.PublicKey
  asset: web3.PublicKey
  userAssetAta: web3.PublicKey
  rewardMint: web3.PublicKey
  userRewardAta: web3.PublicKey
  lockupHotVault: web3.PublicKey
  lockupColdVault: web3.PublicKey
  assetRewardPool: web3.PublicKey
  lockupCooldownVault: web3.PublicKey
  intent?: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const withdrawInstructionDiscriminator = [
  183, 18, 70, 156, 148, 109, 161, 34,
]

/**
 * Creates a _Withdraw_ instruction.
 *
 * Optional accounts that are not provided default to the program ID since
 * this was indicated in the IDL from which this instruction was generated.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Withdraw
 * @category generated
 */
export function createWithdrawInstruction(
  accounts: WithdrawInstructionAccounts,
  args: WithdrawInstructionArgs,
  programId = new web3.PublicKey('EiMoMLXBCKpxTdBwK2mBBaGFWH1v2JdT5nAhiyJdF3pV')
) {
  const [data] = withdrawStruct.serialize({
    instructionDiscriminator: withdrawInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.user,
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
      pubkey: accounts.receiptTokenMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.deposit,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.depositReceiptTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.cooldown,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.assetMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.asset,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.userAssetAta,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.rewardMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.userRewardAta,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.lockupHotVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.lockupColdVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.assetRewardPool,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.lockupCooldownVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.intent ?? programId,
      isWritable: accounts.intent != null,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? programId,
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
