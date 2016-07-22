import {TrackingEvents} from '../tracking/events'

/**
 * Represents a single companion ad. Used in a {@link CompanionAds} creative.
 *
 * @class Companion
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Companion {
  constructor () {
    this._clickTrackings = []
    this._trackingEvents = new TrackingEvents()
  }

  /**
   * The ID for this companion ad.
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
   * The width of this companion ad in pixels.
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
   * The height of this companion ad in pixels.
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
   * The width of this companion ad's asset in pixels.
   *
   * @type {number}
   */
  get assetWidth () {
    return this._assetWidth
  }

  set assetWidth (value) {
    this._assetWidth = value
  }

  /**
   * The height of this companion ad's asset in pixels.
   *
   * @type {number}
   */
  get assetHeight () {
    return this._assetHeight
  }

  set assetHeight (value) {
    this._assetHeight = value
  }

  /**
   * The expanded width of this companion ad in pixels.
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
   * The expanded height of this companion ad in pixels.
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
   * The API framework used by this companion ad.
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
   * The ad slot ID of this companion ad.
   *
   * @type {string}
   */
  get adSlotID () {
    return this._adSlotID
  }

  set adSlotID (value) {
    this._adSlotID = value
  }

  /**
   * The resource associated with this companion ad.
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
   * The ad parameters for this companion ad.
   *
   * @type {string}
   */
  get adParameters () {
    return this._adParameters
  }

  set adParameters (value) {
    this._adParameters = value
  }

  /**
   * The alt text of this companion ad.
   *
   * @type {string}
   */
  get altText () {
    return this._altText
  }

  set altText (value) {
    this._altText = value
  }

  /**
   * The clickthrough configuration for this companion ad.
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
   * The click tracking configurations for this companion ad.
   *
   * @type {Click[]}
   * @readonly
   */
  get clickTrackings () {
    return this._clickTrackings
  }

  /**
   * The tracking event configuration for this companion ad.
   *
   * @type {TrackingEvents}
   * @readonly
   */
  get trackingEvents () {
    return this._trackingEvents
  }

  get $type () {
    return 'Companion'
  }
}
