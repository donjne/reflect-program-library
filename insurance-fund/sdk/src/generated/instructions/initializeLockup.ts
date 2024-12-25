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
  InitializeLockupArgs,
  initializeLockupArgsBeet,
} from '../types/InitializeLockupArgs'

/**
 * @category Instructions
 * @category InitializeLockup
 * @category generated
 */
export type InitializeLockupInstructionArgs = {
  args: InitializeLockupArgs
}
/**
 * @category Instructions
 * @category InitializeLockup
 * @category generated
 */
export const initializeLockupStruct = new beet.FixableBeetArgsStruct<
  InitializeLockupInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', initializeLockupArgsBeet],
  ],
  'InitializeLockupInstructionArgs'
)
/**
 * Accounts required by the _initializeLockup_ instruction
 *
 * @property [_writable_, **signer**] signer
 * @property [_writable_] admin
 * @property [_writable_] settings
 * @property [_writable_] lockup
 * @property [_writable_] asset
 * @property [_writable_] assetMint
 * @property [_writable_] rewardMint
 * @property [_writable_] lockupHotVault
 * @property [] coldWallet
 * @property [_writable_] lockupColdVault
 * @property [_writable_] assetRewardPool
 * @property [_writable_] poolShareReceipt
 * @property [_writable_] lockupCooldownVault
 * @category Instructions
 * @category InitializeLockup
 * @category generated
 */
export type InitializeLockupInstructionAccounts = {
  signer: web3.PublicKey
  admin: web3.PublicKey
  settings: web3.PublicKey
  lockup: web3.PublicKey
  asset: web3.PublicKey
  assetMint: web3.PublicKey
  rewardMint: web3.PublicKey
  lockupHotVault: web3.PublicKey
  coldWallet: web3.PublicKey
  lockupColdVault: web3.PublicKey
  assetRewardPool: web3.PublicKey
  poolShareReceipt: web3.PublicKey
  lockupCooldownVault: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const initializeLockupInstructionDiscriminator = [
  71, 185, 169, 7, 113, 83, 217, 126,
]

/**
 * Creates a _InitializeLockup_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category InitializeLockup
 * @category generated
 */
export function createInitializeLockupInstruction(
  accounts: InitializeLockupInstructionAccounts,
  args: InitializeLockupInstructionArgs,
  programId = new web3.PublicKey('EiMoMLXBCKpxTdBwK2mBBaGFWH1v2JdT5nAhiyJdF3pV')
) {
  const [data] = initializeLockupStruct.serialize({
    instructionDiscriminator: initializeLockupInstructionDiscriminator,
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
      pubkey: accounts.asset,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.assetMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.rewardMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.lockupHotVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.coldWallet,
      isWritable: false,
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
      pubkey: accounts.poolShareReceipt,
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
