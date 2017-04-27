// @flow

import { SortedList } from '../util/sorted-list'
import { Ad } from '../ad/base'

/**
 * Represents a VAST ad pod.
 *
 * @class AdPod
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class AdPod {
  _ads: SortedList<Ad>

  constructor () {
    this._ads = new SortedList()
  }

  /**
   * The ads in this ad pod.
   *
   * @type {SortedList}
   * @readonly
   */
  get ads (): SortedList<Ad> {
    return this._ads
  }

  get $type (): 'AdPod' {
    return 'AdPod'
  }
}
