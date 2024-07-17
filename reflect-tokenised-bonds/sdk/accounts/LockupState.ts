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
 * Arguments used to create {@link LockupState}
 * @category Accounts
 * @category generated
 */
export type LockupStateArgs = {
  id: beet.bignum
  user: web3.PublicKey
  vault: web3.PublicKey
  receiptAmount: beet.bignum
  unlockDate: beet.bignum
}

export const lockupStateDiscriminator = [25, 124, 231, 252, 84, 85, 50, 13]
/**
 * Holds the data for the {@link LockupState} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class LockupState implements LockupStateArgs {
  private constructor(
    readonly id: beet.bignum,
    readonly user: web3.PublicKey,
    readonly vault: web3.PublicKey,
    readonly receiptAmount: beet.bignum,
    readonly unlockDate: beet.bignum
  ) {}

  /**
   * Creates a {@link LockupState} instance from the provided args.
   */
  static fromArgs(args: LockupStateArgs) {
    return new LockupState(
      args.id,
      args.user,
      args.vault,
      args.receiptAmount,
      args.unlockDate
    )
  }

  /**
   * Deserializes the {@link LockupState} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [LockupState, number] {
    return LockupState.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link LockupState} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<LockupState> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find LockupState account at ${address}`)
    }
    return LockupState.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      '6ZZ1sxKGuXUBL8HSsHqHaYCg92G9VhMNTcJv1gFURCop'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, lockupStateBeet)
  }

  /**
   * Deserializes the {@link LockupState} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [LockupState, number] {
    return lockupStateBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link LockupState} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return lockupStateBeet.serialize({
      accountDiscriminator: lockupStateDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link LockupState}
   */
  static get byteSize() {
    return lockupStateBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link LockupState} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      LockupState.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link LockupState} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === LockupState.byteSize
  }

  /**
   * Returns a readable version of {@link LockupState} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      id: (() => {
        const x = <{ toNumber: () => number }>this.id
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      user: this.user.toBase58(),
      vault: this.vault.toBase58(),
      receiptAmount: (() => {
        const x = <{ toNumber: () => number }>this.receiptAmount
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      unlockDate: (() => {
        const x = <{ toNumber: () => number }>this.unlockDate
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
export const lockupStateBeet = new beet.BeetStruct<
  LockupState,
  LockupStateArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['id', beet.u64],
    ['user', beetSolana.publicKey],
    ['vault', beetSolana.publicKey],
    ['receiptAmount', beet.u64],
    ['unlockDate', beet.i64],
  ],
  LockupState.fromArgs,
  'LockupState'
)
