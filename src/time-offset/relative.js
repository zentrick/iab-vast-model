// @flow

import { TimeOffset } from './base'

/**
 * Represents a time offset expressed as a percentage (between 0 and 100).
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class RelativeTimeOffset extends TimeOffset {
  get $type (): 'RelativeTimeOffset' {
    return 'RelativeTimeOffset'
  }
}
