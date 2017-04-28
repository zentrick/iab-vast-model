export class Iterable {
  _contents

  constructor () {
    this._contents = []
  }

  [Symbol.iterator] () {
    let i = 0
    return {
      next: () => {
        return (i < this.length) ? { value: this._contents[i++], done: false }
          : { value: undefined, done: true }
      }
    }
  }
}
