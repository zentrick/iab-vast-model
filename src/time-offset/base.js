/**
 * Represents a time offset.
 *
 * @class TimeOffset
 * @abstract
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class TimeOffset {
  /**
   * The value for this offset.
   *
   * @type {number}
   */
  get value () {
    return this._value
  }

  set value (value) {
    this._value = value
  }
}
