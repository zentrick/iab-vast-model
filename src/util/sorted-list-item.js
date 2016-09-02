/**
 * Represents an item in a {@link SortedList}. Base class for {@link Ad} and
 * {@link Creative}.
 *
 * @class SortedListItem
 * @abstract
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class SortedListItem {
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
