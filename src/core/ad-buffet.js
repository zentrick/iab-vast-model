// @flow

import { SortedList } from '../util/sorted-list'
import type { Ad } from '../ad/base'
import type { AdPod } from './ad-pod'
import type { Type } from '../type'

/**
 * Represents a VAST ad buffet.
 *
 * @class AdBuffet
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class AdBuffet {
  _ads: SortedList<Ad>
  _adPod: AdPod

  constructor () {
    this._ads = new SortedList()
  }

  /**
   * The ads in this ad buffet.
   *
   * @type {SortedList}
   * @readonly
   */
  get ads (): SortedList<Ad> {
    return this._ads
  }

  /**
   * The ad pod for this ad buffet.
   *
   * @type {AdPod}
   */
  get adPod (): AdPod {
    return this._adPod
  }

  set adPod (value: AdPod) {
    this._adPod = value
  }

  get $type (): Type {
    return 'AdBuffet'
  }
}
