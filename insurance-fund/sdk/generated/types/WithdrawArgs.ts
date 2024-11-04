/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type WithdrawArgs = {
  lockupId: beet.bignum
  depositId: beet.bignum
  rewardBoostId: beet.COption<beet.bignum>
  amount: beet.bignum
}

/**
 * @category userTypes
 * @category generated
 */
export const withdrawArgsBeet = new beet.FixableBeetArgsStruct<WithdrawArgs>(
  [
    ['lockupId', beet.u64],
    ['depositId', beet.u64],
    ['rewardBoostId', beet.coption(beet.u64)],
    ['amount', beet.u64],
  ],
  'WithdrawArgs'
)