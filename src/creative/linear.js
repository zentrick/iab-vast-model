/**
 * Represents a linear within a {@link Creative}.
 */
export class Linear {
  constructor () {
    this._skipoffset = null
    this._duration = null
    this._mezzanine = null
    this._mediaFiles = []
    this._interactiveCreativeFiles = []
    this._adParameters = null
    this._videoClicks = null
    this._trackingEvents = null
    this._icons = []
  }

  // Attribute(s).

  /**
   * The time interval after which this linear creative can be skipped.
   *
   * @type {TimeOffset}
   */
  get skipoffset () {
    return this._skipoffset
  }

  set skipoffset (value) {
    this._skipoffset = value
  }

  // Children.

  /**
   * The duration of this linear creative in seconds.
   *
   * @type {number}
   */
  get duration () {
    return this._duration
  }

  set duration (value) {
    this._duration = value
  }

  /**
   * The URI of the raw mezzanine file for this linear creative, intended for
   * video transcoding.
   *
   * @type {string}
   */
  get mezzanine () {
    return this._mezzanine
  }

  set mezzanine (value) {
    this._mezzanine = value
  }

  /**
   * The media files for this linear creative.
   *
   * @type {MediaFile[]}
   */
  get mediaFiles () {
    return this._mediaFiles
  }

  /**
   * The interactive creative files for this linear creative.
   *
   * @type {InteractiveCreativeFile[]}
   */
  get interactiveCreativeFiles () {
    return this._interactiveCreativeFiles
  }

  /**
   * The ad parameters for this linear creative.
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
   * The video click tracking configuration for this linear creative.
   *
   * @type {VideoClicks}
   */
  get videoClicks () {
    return this._videoClicks
  }

  set videoClicks (value) {
    this._videoClicks = value
  }

  /**
   * The event-tracking configuration for this linear creative.
   *
   * @type {TrackingEvents}
   */
  get trackingEvents () {
    return this._trackingEvents
  }

  set trackingEvents (value) {
    this._trackingEvents = value
  }

  /**
   * The icons for this linear creative.
   *
   * @type {Icon[]}
   */
  get icons () {
    return this._icons
  }

  get $type () {
    return 'Linear'
  }
}
