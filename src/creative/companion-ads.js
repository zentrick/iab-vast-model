// @flow

import { Creative } from './base'
import type { Companion } from '../core/companion'
import type { Type } from '../type'

type Required = 'all' | 'any' | 'none'

/**
 * Represents a creative with companion ads.
 *
 * @class CompanionAds
 * @extends Creative
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class CompanionAds extends Creative {
  _companions: Companion[]
  _required: Required

  constructor () {
    super()
    this._companions = []
  }

  /**
   * The companion ads within this creative.
   *
   * @type {Companion[]}
   * @readonly
   */
  get companions (): Companion[] {
    return this._companions
  }

  /**
   * Determines which companion creative to display when multiple companions
   * are supplied and whether the ad can be displayed without its companion
   * creative. Either `"all"`, `"any"`, or `"none"`.
   *
   * @type {string}
   */
  get required (): Required {
    return this._required
  }

  set required (value: Required) {
    this._required = value
  }

  get $type (): Type {
    return 'CompanionAds'
  }
}
