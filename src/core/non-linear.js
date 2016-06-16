/**
 * Represents a single non-linear ad. Used in a {@link NonLinearAds} creative.
 *
 * @class NonLinear
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class NonLinear {
  constructor () {
    this._clickTrackings = []
  }

  /**
   * The ID of this non-linear ad.
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
   * The width of this non-linear ad in pixels.
   *
   * @type {number}
   */
  get width () {
    return this._width
  }

  set width (value) {
    this._width = value
  }

  /**
   * The height of this non-linear ad in pixels.
   *
   * @type {number}
   */
  get height () {
    return this._height
  }

  set height (value) {
    this._height = value
  }

  /**
   * The expanded width of this non-linear ad in pixels.
   *
   * @type {number}
   */
  get expandedWidth () {
    return this._expandedWidth
  }

  set expandedWidth (value) {
    this._expandedWidth = value
  }

  /**
   * The expanded height of this non-linear ad in pixels.
   *
   * @type {number}
   */
  get expandedHeight () {
    return this._expandedHeight
  }

  set expandedHeight (value) {
    this._expandedHeight = value
  }

  /**
   * Whether this non-linear ad is meant to scale to larger dimensions.
   *
   * @type {boolean}
   */
  get scalable () {
    return this._scalable
  }

  set scalable (value) {
    this._scalable = value
  }

  /**
   * Whether this non-linear ad's aspect ratio should be maintained when scaled.
   *
   * @type {boolean}
   */
  get maintainAspectRatio () {
    return this._maintainAspectRatio
  }

  set maintainAspectRatio (value) {
    this._maintainAspectRatio = value
  }

  /**
   * The minimum suggested duration of this non-linear ad in seconds.
   *
   * @type {number}
   */
  get minSuggestedDuration () {
    return this._minSuggestedDuration
  }

  set minSuggestedDuration (value) {
    this._minSuggestedDuration = value
  }

  /**
   * The API framework used by this non-linear ad.
   *
   * @type {string}
   */
  get apiFramework () {
    return this._apiFramework
  }

  set apiFramework (value) {
    this._apiFramework = value
  }

  /**
   * The resource associated with this non-linear ad.
   *
   * @type {Resource}
   */
  get resource () {
    return this._resource
  }

  set resource (value) {
    this._resource = value
  }

  /**
   * The clickthrough configuration for this non-linear ad.
   *
   * @type {Click}
   */
  get clickThrough () {
    return this._clickThrough
  }

  set clickThrough (value) {
    this._clickThrough = value
  }

  /**
   * The click tracking configurations for this non-linear ad.
   *
   * @type {Click[]}
   * @readonly
   */
  get clickTrackings () {
    return this._clickTrackings
  }

  /**
   * The ad parameters for this non-linear ad.
   *
   * @type {string}
   */
  get adParameters () {
    return this._adParameters
  }

  set adParameters (value) {
    this._adParameters = value
  }
}
