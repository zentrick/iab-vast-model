/**
 * Represents companion ads within a {@link Creative}.
 */
export class CompanionAds {
  constructor () {
    this._required = null
    this._companions = []
  }

  // Attribute(s).

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

  // Children.

  /**
   * The companion ads.
   *
   * @type {Companion[]}
   */
  get companions () {
    return this._companions
  }

  get $type () {
    return 'CompanionAds'
  }
}
