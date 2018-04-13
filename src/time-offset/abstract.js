/**
 * Represents a time offset.
 *
 * @abstract
 * @protected
 */
export class AbstractTimeOffset {
  constructor () {
    this._value = null
  }

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
