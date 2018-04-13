import {SortedList} from './sorted-list'

/**
 * Represents a VAST ad pod.
 */
export class AdPod {
  constructor () {
    this._ads = new SortedList()
  }

  /**
   * The ads in this ad pod.
   *
   * @type {SortedList}
   */
  get ads () {
    return this._ads
  }

  get $type () {
    return 'AdPod'
  }
}
