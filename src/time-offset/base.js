// @flow

/**
 * Represents a time offset.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class TimeOffset {
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
}
