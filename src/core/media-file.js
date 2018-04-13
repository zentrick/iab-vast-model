/**
 * Represents a media file used in a {@link Linear} creative.
 */
export class MediaFile {
  constructor () {
    this._delivery = null
    this._type = null
    this._width = null
    this._height = null
    this._codec = null
    this._id = null
    this._bitrate = null
    this._minBitrate = null
    this._maxBitrate = null
    this._scalable = false
    this._maintainAspectRatio = false
    this._apiFramework = null
    this._uri = null
  }

  // Attribute(s).

  /**
   * The delivery method for this media file.
   *
   * @type {string}
   */
  get delivery () {
    return this._delivery
  }

  set delivery (value) {
    this._delivery = value
  }

  /**
   * The MIME type of this media file.
   *
   * @type {string}
   */
  get type () {
    return this._type
  }

  set type (value) {
    this._type = value
  }

  /**
   * The width of this media file in pixels.
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
   * The height of this media file in pixels.
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
   * The codec of this media file in RFC 4281 format.
   *
   * @type {string}
   */
  get codec () {
    return this._codec
  }

  set codec (value) {
    this._codec = value
  }

  /**
   * The ID of this media file.
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
   * The bitrate of this media file in kbps.
   *
   * @type {number}
   */
  get bitrate () {
    return this._bitrate
  }

  set bitrate (value) {
    this._bitrate = value
  }

  /**
   * The minimum bitrate of this media file in kbps.
   *
   * @type {number}
   */
  get minBitrate () {
    return this._minBitrate
  }

  set minBitrate (value) {
    this._minBitrate = value
  }

  /**
   * The maximum bitrate of this media file in kbps.
   *
   * @type {number}
   */
  get maxBitrate () {
    return this._maxBitrate
  }

  set maxBitrate (value) {
    this._maxBitrate = value
  }

  /**
   * Whether this media file is meant to scale to larger dimensions.
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
   * Whether this media file's aspect ratio should be maintained when scaled.
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
   * The API framework used by this media file.
   *
   * @type {string}
   */
  get apiFramework () {
    return this._apiFramework
  }

  set apiFramework (value) {
    this._apiFramework = value
  }

  // Content.

  /**
   * The URI to this media file.
   *
   * @type {string}
   */
  get uri () {
    return this._uri
  }

  set uri (value) {
    this._uri = value
  }

  get $type () {
    return 'MediaFile'
  }
}
