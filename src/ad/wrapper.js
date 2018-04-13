import { AbstractAd } from './abstract'

/**
 * Represents a wrapper ad.
 */
export class Wrapper extends AbstractAd {
  constructor () {
    super()
    this._followAdditionalWrappers = true
    this._allowMultipleAds = false
    this._fallbackOnNoAd = false
    this._vastAdTagURI = null
  }

  // Attribute(s).

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

  // Children.

  /**
   * The URI to a VAST response that may be another VAST {@link Wrapper} or a
   * VAST {@link InLine} ad.
   *
   * @type {string}
   */
  get vastAdTagURI () {
    return this._vastAdTagURI
  }

  set vastAdTagURI (value) {
    this._vastAdTagURI = value
  }

  get $type () {
    return 'Wrapper'
  }
}
