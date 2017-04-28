// @flow

import { AbstractExtension } from './abstract'
import type { Type } from '../type'

/**
 * Represents a VAST extension.
 *
 * @class Extension
 * @extends AbstractExtension
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Extension extends AbstractExtension {
  get $type (): Type {
    return 'Extension'
  }
}
