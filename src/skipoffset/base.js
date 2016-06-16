/**
 * Represents a skip offset for a skippable {@link Linear}.
 *
 * @class Skipoffset
 * @abstract
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Skipoffset {
  /**
   * The value for this skip offset.
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
