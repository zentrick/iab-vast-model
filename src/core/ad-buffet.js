// @flow

import { SortedList } from '../util/sorted-list'
import { Base } from '../base'
import type { Ad } from '../ad/base'
import type { AdPod } from './ad-pod'
import type { Type } from '../type'

/**
 * Represents a VAST ad buffet.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class AdBuffet extends Base {
  _ads: SortedList<Ad>
  _adPod: ?AdPod

  constructor () {
    super()
    this._ads = new SortedList()
  }

  /**
   * The ads in this ad buffet.
   */
  get ads (): SortedList<Ad> {
    return this._ads
  }

  /**
   * The ad pod for this ad buffet.
   */
  get adPod (): ?AdPod {
    return this._adPod
  }

  set adPod (value: ?AdPod) {
    this._adPod = value
  }

  get $type (): Type {
    return 'AdBuffet'
  }
}
