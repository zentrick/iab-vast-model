// @flow

import { Base } from '../base'

/**
 * Represents a time offset.
 *
 * @abstract
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class TimeOffset extends Base {
  _value: number

  /**
   * The value for this offset.
   */
  get value (): number {
    return this._value
  }

  set value (value: number) {
    this._value = value
  }

  get $type (): 'AbsoluteTimeOffset' | 'RelativeTimeOffset' {
    throw new Error('Abstract method')
  }
}
