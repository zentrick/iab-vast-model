import { Creative } from './base'

/**
 * Represents a creative with companion ads.
 *
 * @class CompanionAds
 * @extends Creative
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class CompanionAds extends Creative {
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
  get companions () {
    return this._companions
  }

  /**
   * Determines which companion creative to display when multiple companions
   * are supplied and whether the ad can be displayed without its companion
   * creative. Either `"all"`, `"any"`, or `"none"`.
   *
   * @type {string}
   */
  get required () {
    return this._required
  }

  set required (value) {
    this._required = value
  }

  get $type () {
    return 'CompanionAds'
  }
}
