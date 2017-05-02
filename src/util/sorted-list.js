// @flow

// A SortedList inherits from an Iterable because of this issue:
// https://github.com/facebook/flow/issues/1163
// We apply the technique demonstrated here:
// https://github.com/facebook/flow/issues/2590

import { Iterable } from './iterable'
import type { SortedListItem } from './sorted-list-item'
import type { Type } from '../type'

/**
 * Represents a list of {@link SortedListItem}s, ordered by
 * {@link SortedListItem#sequence}.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class SortedList<T: SortedListItem> extends Iterable<T> {
  /**
   * The length of this list.
   */
  get length (): number {
    return this._contents.length
  }

  /**
   * Adds the given item to this list.
   */
  add (item: T): void {
    this._contents.push(item)
    this._contents.sort((a, b) => (a.sequence || 0) - (b.sequence || 0))
  }

  /**
   * Removes the given item from this list.
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
   */
  toArray (): T[] {
    return this._contents.slice()
  }

  get $type (): Type {
    return 'SortedList'
  }
}
