import {Ad} from './base'

/**
 * Inline ad.
 *
 * @class InLine
 * @extends Ad
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class InLine extends Ad {
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
   * @type {string}
   */
  get survey () {
    return this._survey
  }

  set survey (value) {
    this._survey = value
  }

  /**
   * The pricing configuration for this ad.
   *
   * @type {Pricing}
   */
  get pricing () {
    return this._pricing
  }

  set pricing (value) {
    this._pricing = value
  }
}
