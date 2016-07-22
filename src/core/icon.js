import {IconClicks} from '../clicks/icon'

/**
 * Represents an icon used in a {@link Linear} creative.
 *
 * @class Icon
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Icon {
  constructor () {
    this._clicks = new IconClicks()
    this._viewTrackings = []
  }

  /**
   * The industry initiative that this icon supports.
   *
   * @type {string}
   */
  get program () {
    return this._program
  }

  set program (value) {
    this._program = value
  }

  /**
   * The width of this icon in pixels.
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
   * The height of this icon in pixels.
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
   * The horizontal position of this icon in pixels.
   *
   * @type {number}
   */
  get xPosition () {
    return this._xPosition
  }

  set xPosition (value) {
    this._xPosition = value
  }

  /**
   * The vertical position of this icon in pixels.
   *
   * @type {number}
   */
  get yPosition () {
    return this._yPosition
  }

  set yPosition (value) {
    this._yPosition = value
  }

  /**
   * The duration of this icon in seconds.
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
   * The time offset of this icon in seconds.
   *
   * @type {number}
   */
  get offset () {
    return this._offset
  }

  set offset (value) {
    this._offset = value
  }

  /**
   * The API framework used by this icon.
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
   * The resource associated with this icon.
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
   * The click tracking configuration for this icon.
   *
   * @type {IconClicks}
   * @readonly
   */
  get clicks () {
    return this._clicks
  }

  /**
   * The view tracking configuration.
   *
   * @type {Click[]}
   */
  get viewTrackings () {
    return this._viewTrackings
  }

  get $type () {
    return 'Icon'
  }
}
