/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link RewardBoost}
 * @category Accounts
 * @category generated
 */
export type RewardBoostArgs = {
  minUsdValue: beet.bignum
  boostBps: beet.bignum
  lockup: beet.bignum
}

export const rewardBoostDiscriminator = [242, 10, 119, 47, 141, 5, 66, 151]
/**
 * Holds the data for the {@link RewardBoost} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class RewardBoost implements RewardBoostArgs {
  private constructor(
    readonly minUsdValue: beet.bignum,
    readonly boostBps: beet.bignum,
    readonly lockup: beet.bignum
  ) {}

  /**
   * Creates a {@link RewardBoost} instance from the provided args.
   */
  static fromArgs(args: RewardBoostArgs) {
    return new RewardBoost(args.minUsdValue, args.boostBps, args.lockup)
  }

  /**
   * Deserializes the {@link RewardBoost} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [RewardBoost, number] {
    return RewardBoost.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link RewardBoost} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<RewardBoost> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find RewardBoost account at ${address}`)
    }
    return RewardBoost.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'EiMoMLXBCKpxTdBwK2mBBaGFWH1v2JdT5nAhiyJdF3pV'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, rewardBoostBeet)
  }

  /**
   * Deserializes the {@link RewardBoost} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [RewardBoost, number] {
    return rewardBoostBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link RewardBoost} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return rewardBoostBeet.serialize({
      accountDiscriminator: rewardBoostDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link RewardBoost}
   */
  static get byteSize() {
    return rewardBoostBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link RewardBoost} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      RewardBoost.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link RewardBoost} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === RewardBoost.byteSize
  }

  /**
   * Returns a readable version of {@link RewardBoost} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      minUsdValue: (() => {
        const x = <{ toNumber: () => number }>this.minUsdValue
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      boostBps: (() => {
        const x = <{ toNumber: () => number }>this.boostBps
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      lockup: (() => {
        const x = <{ toNumber: () => number }>this.lockup
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
export const rewardBoostBeet = new beet.BeetStruct<
  RewardBoost,
  RewardBoostArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['minUsdValue', beet.u64],
    ['boostBps', beet.u64],
    ['lockup', beet.u64],
  ],
  RewardBoost.fromArgs,
  'RewardBoost'
)
