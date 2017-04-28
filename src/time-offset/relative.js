// @flow

import { TimeOffset } from './base'
import type { Type } from '../type'

/**
 * Represents a time offset expressed as a percentage (between 0 and 100).
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class RelativeTimeOffset extends TimeOffset {
  get $type (): Type {
    return 'RelativeTimeOffset'
  }
}
