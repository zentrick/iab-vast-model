import { Base } from '../base'

export class Iterable extends Base {
  _contents

  constructor () {
    super()
    this._contents = []
  }

  [Symbol.iterator] () {
    let i = 0
    return {
      next: () => {
        return (i < this.length)
          ? { value: this._contents[i++], done: false }
          : { value: undefined, done: true }
      }
    }
  }
}
