import { SortedListItem } from '../util/sorted-list-item'

/**
 * Represents a creative.
 */
export class Creative extends SortedListItem {
  constructor () {
    super()
    this._id = null
    this._adID = null
    this._apiFramework = null
    this._universalAdId = null
    this._extensions = []
    this._linear = null
    this._companionAds = null
    this._nonLinearAds = null
  }

  // Attribute(s).

  /**
   * The ID of this creative.
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
   * The ID of the {@link Ad} with which this creative is served.
   *
   * Required for VAST 2.0 and 3.0, optional for VAST 4.0.
   *
   * @type {string}
   */
  get adID () {
    return this._adID
  }

  set adID (value) {
    this._adID = value
  }

  /**
   * The string that identifies an API that is needed to execute this creative.
   *
   * @type {string}
   */
  get apiFramework () {
    return this._apiFramework
  }

  set apiFramework (value) {
    this._apiFramework = value
  }

  // Children.

  /**
   * The unique creative identifier for this creative.
   *
   * @type {UniversalAdId}
   */
  get universalAdId () {
    return this._universalAdId
  }

  set universalAdId (value) {
    this._universalAdId = value
  }

  /**
   * The creative extensions for this creative.
   *
   * @type {CreativeExtension[]}
   */
  get extensions () {
    return this._extensions
  }

  /**
   * The linear ad for this creative, if any.
   *
   * @type {Linear}
   */
  get linear () {
    return this._linear
  }

  set linear (value) {
    this._linear = value
  }

  /**
   * The companion ads for this creative, if any.
   *
   * @type {CompanionAds}
   */
  get companionAds () {
    return this._companionAds
  }

  set companionAds (value) {
    this._companionAds = value
  }

  /**
   * The non-linear ads for this creative, if any.
   *
   * @type {NonLinearAds}
   */
  get nonLinearAds () {
    return this._nonLinearAds
  }

  set nonLinearAds (value) {
    this._nonLinearAds = value
  }

  get $type () {
    return 'Creative'
  }
}
