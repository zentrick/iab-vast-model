// @flow

import { TimeOffset } from './base'

/**
 * Represents a time offset expressed as an absolute duration in seconds.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class AbsoluteTimeOffset extends TimeOffset {
  get $type (): 'AbsoluteTimeOffset' {
    return 'AbsoluteTimeOffset'
  }
}
