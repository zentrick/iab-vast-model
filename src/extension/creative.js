// @flow

import { AbstractExtension } from './abstract'
import type { Type } from '../type'

/**
 * Represents a creative extension.
 *
 * @class CreativeExtension
 * @extends AbstractExtension
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class CreativeExtension extends AbstractExtension {
  get $type (): Type {
    return 'CreativeExtension'
  }
}
