// @flow

/**
 * Represents an item in a {@link SortedList}. Base class for {@link Ad} and
 * {@link Creative}.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class SortedListItem {
  _sequence: number

  /**
   * The sequence number of this item within its parent.
   */
  get sequence (): number {
    return this._sequence
  }

  set sequence (value: number) {
    this._sequence = value
  }
}
