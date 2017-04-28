// @flow

import type { Type } from '../type'

/**
 * Represents a media file used in a {@link Linear} creative.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class MediaFile {
  _id: string
  _delivery: string
  _type: string
  _bitrate: number
  _minBitrate: number
  _maxBitrate: number
  _width: number
  _height: number
  _scalable: boolean
  _maintainAspectRatio: boolean
  _codec: string
  _apiFramework: string
  _uri: string

  /**
   * The ID of this media file.
   */
  get id (): string {
    return this._id
  }

  set id (value: string) {
    this._id = value
  }

  /**
   * The delivery method for this media file.
   */
  get delivery (): string {
    return this._delivery
  }

  set delivery (value: string) {
    this._delivery = value
  }

  /**
   * The MIME type of this media file.
   */
  get type (): string {
    return this._type
  }

  set type (value: string) {
    this._type = value
  }

  /**
   * The bitrate of this media file in kbps.
   */
  get bitrate (): number {
    return this._bitrate
  }

  set bitrate (value: number) {
    this._bitrate = value
  }

  /**
   * The minimum bitrate of this media file in kbps.
   */
  get minBitrate (): number {
    return this._minBitrate
  }

  set minBitrate (value: number) {
    this._minBitrate = value
  }

  /**
   * The maximum bitrate of this media file in kbps.
   */
  get maxBitrate (): number {
    return this._maxBitrate
  }

  set maxBitrate (value: number) {
    this._maxBitrate = value
  }

  /**
   * The width of this media file in pixels.
   */
  get width (): number {
    return this._width
  }

  set width (value: number) {
    this._width = value
  }

  /**
   * The height of this media file in pixels.
   */
  get height (): number {
    return this._height
  }

  set height (value: number) {
    this._height = value
  }

  /**
   * Whether this media file is meant to scale to larger dimensions.
   */
  get scalable (): boolean {
    return this._scalable
  }

  set scalable (value: boolean) {
    this._scalable = value
  }

  /**
   * Whether this media file's aspect ratio should be maintained when scaled.
   */
  get maintainAspectRatio (): boolean {
    return this._maintainAspectRatio
  }

  set maintainAspectRatio (value: boolean) {
    this._maintainAspectRatio = value
  }

  /**
   * The codec of this media file in RFC 4281 format.
   */
  get codec (): string {
    return this._codec
  }

  set codec (value: string) {
    this._codec = value
  }

  /**
   * The API framework used by this media file.
   */
  get apiFramework (): string {
    return this._apiFramework
  }

  set apiFramework (value: string) {
    this._apiFramework = value
  }

  /**
   * The URI to this media file.
   */
  get uri (): string {
    return this._uri
  }

  set uri (value: string) {
    this._uri = value
  }

  get $type (): Type {
    return 'MediaFile'
  }
}
