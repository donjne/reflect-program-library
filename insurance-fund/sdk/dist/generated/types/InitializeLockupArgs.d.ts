/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
import * as beet from '@metaplex-foundation/beet';
import { YieldMode } from './YieldMode';
export type InitializeLockupArgs = {
    minDeposit: beet.bignum;
    depositCap: beet.bignum;
    duration: beet.bignum;
    yieldMode: YieldMode;
};
/**
 * @category userTypes
 * @category generated
 */
export declare const initializeLockupArgsBeet: beet.FixableBeetArgsStruct<InitializeLockupArgs>;
