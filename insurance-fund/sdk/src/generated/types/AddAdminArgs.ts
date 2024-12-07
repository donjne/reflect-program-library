/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import { Permissions, permissionsBeet } from './Permissions'
export type AddAdminArgs = {
  permissions: Permissions
}

/**
 * @category userTypes
 * @category generated
 */
export const addAdminArgsBeet = new beet.BeetArgsStruct<AddAdminArgs>(
  [['permissions', permissionsBeet]],
  'AddAdminArgs'
)