import {SortedList} from '../util/sorted-list'

/**
 * Represents a VAST ad pod.
 *
 * @class AdPod
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class AdPod {
  constructor () {
    this._ads = new SortedList()
  }

  /**
   * The ads in this ad pod.
   *
   * @type {SortedList}
   * @readonly
   */
  get ads () {
    return this._ads
  }
}
