/**
 * Represents an icon used in a {@link Linear} creative.
 */
export class Icon {
  constructor () {
    this._program = null
    this._width = null
    this._height = null
    this._xPosition = null
    this._yPosition = null
    this._duration = null
    this._offset = null
    this._apiFramework = null
    this._pxratio = null
    this._resource = null
    this._clicks = null
    this._viewTrackings = []
  }

  // Attribute(s).

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
   * The horizontal position of this icon. Either a number of pixels or the
   * string `"left"` or `"right"`.
   *
   * @type {number|string}
   */
  get xPosition () {
    return this._xPosition
  }

  set xPosition (value) {
    this._xPosition = value
  }

  /**
   * The vertical position of this icon. Either a number of pixels or the
   * string `"top"` or `"bottom"`.
   *
   * @type {number|string}
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
   * The pixel ratio for which the icon creative is intended.
   *
   * @type {string}
   */
  get pxratio () {
    return this._pxratio
  }

  set pxratio (value) {
    this._pxratio = value
  }

  // Children.

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
   * The click-tracking configuration for this icon.
   *
   * @type {IconClicks}
   */
  get clicks () {
    return this._clicks
  }

  set clicks (value) {
    this._clicks = value
  }

  /**
   * The view-tracking URIs for this icon.
   *
   * @type {string[]}
   */
  get viewTrackings () {
    return this._viewTrackings
  }

  get $type () {
    return 'Icon'
  }
}
