/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import { YieldMode, yieldModeBeet } from '../types/YieldMode'
import { SlashState, slashStateBeet } from '../types/SlashState'

/**
 * Arguments used to create {@link Lockup}
 * @category Accounts
 * @category generated
 */
export type LockupArgs = {
  bump: number
  locked: boolean
  index: beet.bignum
  asset: web3.PublicKey
  minDeposit: beet.bignum
  duration: beet.bignum
  yieldBps: beet.bignum
  yieldMode: YieldMode
  depositCap: beet.COption<beet.bignum>
  deposits: beet.bignum
  slashState: SlashState
  rewardBoosts: beet.bignum
}

export const lockupDiscriminator = [1, 45, 32, 32, 57, 81, 88, 67]
/**
 * Holds the data for the {@link Lockup} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Lockup implements LockupArgs {
  private constructor(
    readonly bump: number,
    readonly locked: boolean,
    readonly index: beet.bignum,
    readonly asset: web3.PublicKey,
    readonly minDeposit: beet.bignum,
    readonly duration: beet.bignum,
    readonly yieldBps: beet.bignum,
    readonly yieldMode: YieldMode,
    readonly depositCap: beet.COption<beet.bignum>,
    readonly deposits: beet.bignum,
    readonly slashState: SlashState,
    readonly rewardBoosts: beet.bignum
  ) {}

  /**
   * Creates a {@link Lockup} instance from the provided args.
   */
  static fromArgs(args: LockupArgs) {
    return new Lockup(
      args.bump,
      args.locked,
      args.index,
      args.asset,
      args.minDeposit,
      args.duration,
      args.yieldBps,
      args.yieldMode,
      args.depositCap,
      args.deposits,
      args.slashState,
      args.rewardBoosts
    )
  }

  /**
   * Deserializes the {@link Lockup} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [Lockup, number] {
    return Lockup.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link Lockup} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<Lockup> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find Lockup account at ${address}`)
    }
    return Lockup.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'BXopfEhtpSHLxK66tAcxY7zYEUyHL6h91NJtP2nWx54e'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, lockupBeet)
  }

  /**
   * Deserializes the {@link Lockup} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [Lockup, number] {
    return lockupBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link Lockup} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return lockupBeet.serialize({
      accountDiscriminator: lockupDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link Lockup} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: LockupArgs) {
    const instance = Lockup.fromArgs(args)
    return lockupBeet.toFixedFromValue({
      accountDiscriminator: lockupDiscriminator,
      ...instance,
    }).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link Lockup} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: LockupArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      Lockup.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link Lockup} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      bump: this.bump,
      locked: this.locked,
      index: (() => {
        const x = <{ toNumber: () => number }>this.index
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      asset: this.asset.toBase58(),
      minDeposit: (() => {
        const x = <{ toNumber: () => number }>this.minDeposit
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      duration: (() => {
        const x = <{ toNumber: () => number }>this.duration
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      yieldBps: (() => {
        const x = <{ toNumber: () => number }>this.yieldBps
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      yieldMode: this.yieldMode.__kind,
      depositCap: this.depositCap,
      deposits: (() => {
        const x = <{ toNumber: () => number }>this.deposits
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      slashState: this.slashState,
      rewardBoosts: (() => {
        const x = <{ toNumber: () => number }>this.rewardBoosts
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const lockupBeet = new beet.FixableBeetStruct<
  Lockup,
  LockupArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['bump', beet.u8],
    ['locked', beet.bool],
    ['index', beet.u64],
    ['asset', beetSolana.publicKey],
    ['minDeposit', beet.u64],
    ['duration', beet.u64],
    ['yieldBps', beet.u64],
    ['yieldMode', yieldModeBeet],
    ['depositCap', beet.coption(beet.u64)],
    ['deposits', beet.u64],
    ['slashState', slashStateBeet],
    ['rewardBoosts', beet.u64],
  ],
  Lockup.fromArgs,
  'Lockup'
)