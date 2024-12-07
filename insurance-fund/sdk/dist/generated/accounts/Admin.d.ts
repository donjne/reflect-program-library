/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import * as beetSolana from '@metaplex-foundation/beet-solana';
import { Permissions } from '../types/Permissions';
/**
 * Arguments used to create {@link Admin}
 * @category Accounts
 * @category generated
 */
export type AdminArgs = {
    index: beet.bignum;
    address: web3.PublicKey;
    permissions: Permissions;
};
export declare const adminDiscriminator: number[];
/**
 * Holds the data for the {@link Admin} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export declare class Admin implements AdminArgs {
    readonly index: beet.bignum;
    readonly address: web3.PublicKey;
    readonly permissions: Permissions;
    private constructor();
    /**
     * Creates a {@link Admin} instance from the provided args.
     */
    static fromArgs(args: AdminArgs): Admin;
    /**
     * Deserializes the {@link Admin} from the data of the provided {@link web3.AccountInfo}.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset?: number): [Admin, number];
    /**
     * Retrieves the account info from the provided address and deserializes
     * the {@link Admin} from its data.
     *
     * @throws Error if no account info is found at the address or if deserialization fails
     */
    static fromAccountAddress(connection: web3.Connection, address: web3.PublicKey, commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig): Promise<Admin>;
    /**
     * Provides a {@link web3.Connection.getProgramAccounts} config builder,
     * to fetch accounts matching filters that can be specified via that builder.
     *
     * @param programId - the program that owns the accounts we are filtering
     */
    static gpaBuilder(programId?: web3.PublicKey): beetSolana.GpaBuilder<{
        accountDiscriminator: any;
        index: any;
        address: any;
        permissions: any;
    }>;
    /**
     * Deserializes the {@link Admin} from the provided data Buffer.
     * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
     */
    static deserialize(buf: Buffer, offset?: number): [Admin, number];
    /**
     * Serializes the {@link Admin} into a Buffer.
     * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
     */
    serialize(): [Buffer, number];
    /**
     * Returns the byteSize of a {@link Buffer} holding the serialized data of
     * {@link Admin}
     */
    static get byteSize(): number;
    /**
     * Fetches the minimum balance needed to exempt an account holding
     * {@link Admin} data from rent
     *
     * @param connection used to retrieve the rent exemption information
     */
    static getMinimumBalanceForRentExemption(connection: web3.Connection, commitment?: web3.Commitment): Promise<number>;
    /**
     * Determines if the provided {@link Buffer} has the correct byte size to
     * hold {@link Admin} data.
     */
    static hasCorrectByteSize(buf: Buffer, offset?: number): boolean;
    /**
     * Returns a readable version of {@link Admin} properties
     * and can be used to convert to JSON and/or logging
     */
    pretty(): {
        index: number | {
            toNumber: () => number;
        };
        address: string;
        permissions: string;
    };
}
/**
 * @category Accounts
 * @category generated
 */
export declare const adminBeet: beet.BeetStruct<Admin, AdminArgs & {
    accountDiscriminator: number[];
}>;
