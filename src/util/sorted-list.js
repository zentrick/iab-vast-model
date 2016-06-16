export class SortedList {
  constructor () {
    this._contents = []
  }

  get length () {
    return this._contents.length
  }

  add (item) {
    this._contents.push(item)
    this._contents.sort((a, b) => (a.sequence || 0) - (b.sequence || 0))
  }

  remove (item) {
    let index = this._contents.indexOf(item)
    while (index >= 0) {
      this._contents.splice(index, 1)
      index = this._contents.indexOf(item, index)
    }
  }

  get (index) {
    return this._contents[index]
  }

  clear () {
    this._contents.length = 0
  }

  [Symbol.iterator] () {
    const that = this
    let i = 0
    return {
      next () {
        return (i < that.length) ? {value: that.get(i++), done: false}
          : {value: undefined, done: true}
      }
    }
  }

  toArray () {
    return this._contents.slice()
  }
}
