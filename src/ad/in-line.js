import { AbstractAd } from './abstract'

/**
 * Represents an InLine ad.
 */
export class InLine extends AbstractAd {
  constructor () {
    super()
    this._adTitle = null
    this._categories = []
    this._description = null
    this._surveys = []
  }

  // Children.

  /**
   * The title for this ad.
   *
   * @type {string}
   */
  get adTitle () {
    return this._adTitle
  }

  set adTitle (value) {
    this._adTitle = value
  }

  /**
   * The categories for this ad.
   *
   * @type {Category[]}
   */
  get categories () {
    return this._categories
  }

  /**
   * The description for this ad.
   *
   * @type {string}
   */
  get description () {
    return this._description
  }

  set description (value) {
    this._description = value
  }

  /**
   * The advertiser name for this ad.
   *
   * @type {string}
   */
  get advertiser () {
    return this._advertiser
  }

  set advertiser (value) {
    this._advertiser = value
  }

  /**
   * The survey URI for this ad.
   *
   * @type {Survey[]}
   */
  get surveys () {
    return this._surveys
  }

  get $type () {
    return 'InLine'
  }
}
