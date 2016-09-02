import { Ad } from './base'

/**
 * Wrapper ad.
 *
 * @class Wrapper
 * @extends Ad
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Wrapper extends Ad {
  /**
   * The URI of the tag that this ad wraps.
   *
   * @type {string}
   */
  get vastAdTagURI () {
    return this._vastAdTagURI
  }

  set vastAdTagURI (value) {
    this._vastAdTagURI = value
  }

  /**
   * Whether subsequent wrappers after a requested VAST response is allowed.
   *
   * @type {boolean}
   */
  get followAdditionalWrappers () {
    return this._followAdditionalWrappers
  }

  set followAdditionalWrappers (value) {
    this._followAdditionalWrappers = value
  }

  /**
   * Whether multiple ads are allowed in the requested VAST response.
   *
   * @type {boolean}
   */
  get allowMultipleAds () {
    return this._allowMultipleAds
  }

  set allowMultipleAds (value) {
    this._allowMultipleAds = value
  }

  /**
   * Whether to use an available Ad when the requested VAST response returns no
   * ads.
   *
   * @type {boolean}
   */
  get fallbackOnNoAd () {
    return this._fallbackOnNoAd
  }

  set fallbackOnNoAd (value) {
    this._fallbackOnNoAd = value
  }

  get $type () {
    return 'Wrapper'
  }
}
