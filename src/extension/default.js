// @flow

import { AbstractExtension } from './abstract'
import type { Type } from '../type'

/**
 * Represents a VAST extension.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class Extension extends AbstractExtension {
  get $type (): Type {
    return 'Extension'
  }
}
