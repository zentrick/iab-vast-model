/**
 * Represents an item in a {@link SortedList}. Base class for {@link Ad} and
 * {@link Creative}.
 *
 * @abstract
 */
export class SortedListItem {
  constructor () {
    this._sequence = null
  }

  /**
   * The sequence number of this item within its parent.
   *
   * @type {number}
   */
  get sequence () {
    return this._sequence
  }

  set sequence (value) {
    this._sequence = value
  }
}
