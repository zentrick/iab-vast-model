// @flow

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
  _vastAdTagURI: string
  _followAdditionalWrappers: boolean
  _allowMultipleAds: boolean
  _fallbackOnNoAd: boolean

  /**
   * The URI of the tag that this ad wraps.
   *
   * @type {string}
   */
  get vastAdTagURI (): string {
    return this._vastAdTagURI
  }

  set vastAdTagURI (value: string) {
    this._vastAdTagURI = value
  }

  /**
   * Whether subsequent wrappers after a requested VAST response is allowed.
   *
   * @type {boolean}
   */
  get followAdditionalWrappers (): boolean {
    return this._followAdditionalWrappers
  }

  set followAdditionalWrappers (value: boolean) {
    this._followAdditionalWrappers = value
  }

  /**
   * Whether multiple ads are allowed in the requested VAST response.
   *
   * @type {boolean}
   */
  get allowMultipleAds (): boolean {
    return this._allowMultipleAds
  }

  set allowMultipleAds (value: boolean) {
    this._allowMultipleAds = value
  }

  /**
   * Whether to use an available Ad when the requested VAST response returns no
   * ads.
   *
   * @type {boolean}
   */
  get fallbackOnNoAd (): boolean {
    return this._fallbackOnNoAd
  }

  set fallbackOnNoAd (value: boolean) {
    this._fallbackOnNoAd = value
  }

  get $type (): 'Wrapper' {
    return 'Wrapper'
  }
}
