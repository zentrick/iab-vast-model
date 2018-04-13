import { SortedList } from './sorted-list'

/**
 * Represents a VAST ad buffet.
 */
export class AdBuffet {
  constructor () {
    this._ads = new SortedList()
    this._adPod = null
  }

  /**
   * The ads in this ad buffet.
   *
   * @type {SortedList}
   */
  get ads () {
    return this._ads
  }

  /**
   * The ad pod for this ad buffet.
   *
   * @type {AdPod}
   */
  get adPod () {
    return this._adPod
  }

  set adPod (value) {
    this._adPod = value
  }

  get $type () {
    return 'AdBuffet'
  }
}
