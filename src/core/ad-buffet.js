import {SortedList} from '../util/sorted-list'

/**
 * Represents a VAST ad buffet.
 *
 * @class AdBuffet
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class AdBuffet {
  constructor () {
    this._ads = new SortedList()
  }

  /**
   * The ads in this ad buffet.
   *
   * @type {SortedList}
   * @readonly
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
}
