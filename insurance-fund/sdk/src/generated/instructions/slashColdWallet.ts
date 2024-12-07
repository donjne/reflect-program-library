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
  SlashColdWalletArgs,
  slashColdWalletArgsBeet,
} from '../types/SlashColdWalletArgs'

/**
 * @category Instructions
 * @category SlashColdWallet
 * @category generated
 */
export type SlashColdWalletInstructionArgs = {
  args: SlashColdWalletArgs
}
/**
 * @category Instructions
 * @category SlashColdWallet
 * @category generated
 */
export const slashColdWalletStruct = new beet.FixableBeetArgsStruct<
  SlashColdWalletInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', slashColdWalletArgsBeet],
  ],
  'SlashColdWalletInstructionArgs'
)
/**
 * Accounts required by the _slashColdWallet_ instruction
 *
 * @property [_writable_, **signer**] signer
 * @property [_writable_] admin
 * @property [_writable_] settings
 * @property [_writable_] coldWallet
 * @property [_writable_] lockup
 * @property [_writable_] slash
 * @property [_writable_] assetMint (optional)
 * @property [_writable_] source (optional)
 * @property [_writable_] destination (optional)
 * @category Instructions
 * @category SlashColdWallet
 * @category generated
 */
export type SlashColdWalletInstructionAccounts = {
  signer: web3.PublicKey
  admin: web3.PublicKey
  settings: web3.PublicKey
  coldWallet: web3.PublicKey
  lockup: web3.PublicKey
  slash: web3.PublicKey
  assetMint?: web3.PublicKey
  source?: web3.PublicKey
  destination?: web3.PublicKey
  tokenProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const slashColdWalletInstructionDiscriminator = [
  9, 62, 9, 165, 4, 209, 107, 9,
]

/**
 * Creates a _SlashColdWallet_ instruction.
 *
 * Optional accounts that are not provided default to the program ID since
 * this was indicated in the IDL from which this instruction was generated.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category SlashColdWallet
 * @category generated
 */
export function createSlashColdWalletInstruction(
  accounts: SlashColdWalletInstructionAccounts,
  args: SlashColdWalletInstructionArgs,
  programId = new web3.PublicKey('EiMoMLXBCKpxTdBwK2mBBaGFWH1v2JdT5nAhiyJdF3pV')
) {
  const [data] = slashColdWalletStruct.serialize({
    instructionDiscriminator: slashColdWalletInstructionDiscriminator,
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
      pubkey: accounts.coldWallet,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.lockup,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.slash,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.assetMint ?? programId,
      isWritable: accounts.assetMint != null,
      isSigner: false,
    },
    {
      pubkey: accounts.source ?? programId,
      isWritable: accounts.source != null,
      isSigner: false,
    },
    {
      pubkey: accounts.destination ?? programId,
      isWritable: accounts.destination != null,
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