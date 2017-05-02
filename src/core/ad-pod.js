// @flow

import { SortedList } from '../util/sorted-list'
import { Ad } from '../ad/base'
import type { Type } from '../type'

/**
 * Represents a VAST ad pod.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class AdPod {
  _ads: SortedList<Ad>

  constructor () {
    this._ads = new SortedList()
  }

  /**
   * The ads in this ad pod.
   */
  get ads (): SortedList<Ad> {
    return this._ads
  }

  get $type (): Type {
    return 'AdPod'
  }
}
