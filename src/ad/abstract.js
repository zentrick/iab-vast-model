import { SortedListItem } from '../util/sorted-list-item'
import { SortedList } from '../util/sorted-list'

/**
 * Abstract class for ads (i.e., {@link InLine} and {@link Wrapper}).
 *
 * @abstract
 * @protected
 */
export class AbstractAd extends SortedListItem {
  constructor () {
    super()
    this._id = null
    this._conditionalAd = false
    this._adSystem = null
    this._impressions = []
    this._pricing = null
    this._errors = []
    this._viewableImpression = null
    this._verifications = []
    this._extensions = []
    this._creatives = new SortedList()
  }

  // Attribute(s).

  /**
   * The ad server-defined identifier for this ad.
   *
   * @type {string}
   */
  get id () {
    return this._id
  }

  set id (value) {
    this._id = value
  }

  /**
   * The conditional attribute for this ad.
   *
   * @type {boolean}
   */
  get conditionalAd () {
    return this._conditionalAd
  }

  set conditionalAd (value) {
    this._conditionalAd = value
  }

  // Children.

  /**
   * The ad system for this ad.
   *
   * @type {AdSystem}
   */
  get adSystem () {
    return this._adSystem
  }

  set adSystem (value) {
    this._adSystem = value
  }

  /**
   * The impression-tracking configurations for this ad.
   *
   * @type {Impression[]}
   */
  get impressions () {
    return this._impressions
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

  /**
   * The error-tracking URIs for this ad.
   *
   * @type {string[]}
   */
  get errors () {
    return this._errors
  }

  /**
   * The viewable impression for this ad.
   *
   * @type {ViewableImpression}
   */
  get viewableImpression () {
    return this._viewableImpression
  }

  set viewableImpression (value) {
    this._viewableImpression = value
  }

  /**
   * The verifications for this ad.
   *
   * @type {Verification[]}
   */
  get verifications () {
    return this._verifications
  }

  /**
   * The extensions for this ad.
   *
   * @type {Extension[]}
   */
  get extensions () {
    return this._extensions
  }

  /**
   * The creatives for this ad.
   *
   * @type {SortedList.<Creative>}
   */
  get creatives () {
    return this._creatives
  }
}
