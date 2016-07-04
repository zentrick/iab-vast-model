import {Creative} from './base'
import {VideoClicks} from '../clicks/video'
import {TrackingEvents} from '../tracking/events'

/**
 * Represents a linear creative.
 *
 * @class Linear
 * @extends Creative
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Linear extends Creative {
  constructor () {
    super()
    this._mediaFiles = []
    this._trackingEvents = new TrackingEvents()
    this._videoClicks = new VideoClicks()
    this._icons = []
  }

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
   * The media files within this linear creative.
   *
   * @type {MediaFile[]}
   * @readonly
   */
  get mediaFiles () {
    return this._mediaFiles
  }

  /**
   * The event tracking configuration for this linear creative.
   *
   * @type {TrackingEvents}
   * @readonly
   */
  get trackingEvents () {
    return this._trackingEvents
  }

  /**
   * The video click tracking configuration for this linear creative.
   *
   * @type {VideoClicks}
   * @readonly
   */
  get videoClicks () {
    return this._videoClicks
  }

  /**
   * The icons for this linear creative.
   *
   * @type {Icon[]}
   * @readonly
   */
  get icons () {
    return this._icons
  }
}
