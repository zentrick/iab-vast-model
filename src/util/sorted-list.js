/**
 * Represents a list of {@link SortedListItem}s, ordered by
 * {@link SortedListItem#sequence}.
 */
export class SortedList {
  constructor () {
    this._contents = []
  }

  /**
   * The length of this list.
   *
   * @type {number}
   */
  get length () {
    return this._contents.length
  }

  /**
   * Adds the given item to this list.
   *
   * @param {SortedListItem} item - the item.
   */
  add (item) {
    this._contents.push(item)
    this._contents.sort((a, b) => (a.sequence || 0) - (b.sequence || 0))
  }

  /**
   * Removes the given item from this list.
   *
   * @param {SortedListItem} item - the item.
   */
  remove (item) {
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
  get (index) {
    return this._contents[index]
  }

  /**
   * Empties this list.
   */
  clear () {
    this._contents.length = 0
  }

  [Symbol.iterator] () {
    const that = this
    let i = 0
    return {
      next () {
        return (i < that.length) ? { value: that.get(i++), done: false }
          : { value: undefined, done: true }
      }
    }
  }

  /**
   * Creates an array representation of this list.
   *
   * @return {SortedListItem[]} the item array.
   */
  toArray () {
    return this._contents.slice()
  }

  get $type () {
    return 'SortedList'
  }
}
