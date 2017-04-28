// @flow

import { Iterable } from './iterable'
import type { SortedListItem } from './sorted-list-item'
import type { Type } from '../type'

/**
 * Represents a list of {@link SortedListItem}s, ordered by
 * {@link SortedListItem#sequence}.
 *
 * @class SortedList
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class SortedList<T: SortedListItem> extends Iterable<T> {
  /**
   * The length of this list.
   *
   * @type {number}
   * @readonly
   */
  get length (): number {
    return this._contents.length
  }

  /**
   * Adds the given item to this list.
   *
   * @param {SortedListItem} item - the item.
   */
  add (item: T): void {
    this._contents.push(item)
    this._contents.sort((a, b) => (a.sequence || 0) - (b.sequence || 0))
  }

  /**
   * Removes the given item from this list.
   *
   * @param {SortedListItem} item - the item.
   */
  remove (item: T) {
    let index = this._contents.indexOf(item)
    while (index >= 0) {
      this._contents.splice(index, 1)
      index = this._contents.indexOf(item, index)
    }
  }

  /**
   * Gets the item at the given index.
   *
   * @param {number} index - the index.
   * @return {SortedListItem} the item.
   */
  get (index: number): T {
    return this._contents[index]
  }

  /**
   * Empties this list.
   */
  clear () {
    this._contents.length = 0
  }

  /**
   * Creates an array representation of this list.
   *
   * @return {SortedListItem[]} the item array.
   */
  toArray (): T[] {
    return this._contents.slice()
  }

  get $type (): Type {
    return 'SortedList'
  }
}
