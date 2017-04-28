// @flow

import type { Resource } from '../resource/base'
import type { Click } from '../util/click'
import type { Type } from '../type'

/**
 * Represents a single non-linear ad. Used in a {@link NonLinearAds} creative.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class NonLinear {
  _id: string
  _width: number
  _height: number
  _expandedWidth: number
  _expandedHeight: number
  _scalable: boolean
  _maintainAspectRatio: boolean
  _minSuggestedDuration: number
  _apiFramework: string
  _resource: Resource
  _clickThrough: Click
  _clickTrackings: Click[]
  _adParameters: string

  constructor () {
    this._clickTrackings = []
  }

  /**
   * The ID of this non-linear ad.
   */
  get id (): string {
    return this._id
  }

  set id (value: string) {
    this._id = value
  }

  /**
   * The width of this non-linear ad in pixels.
   */
  get width (): number {
    return this._width
  }

  set width (value: number) {
    this._width = value
  }

  /**
   * The height of this non-linear ad in pixels.
   */
  get height (): number {
    return this._height
  }

  set height (value: number) {
    this._height = value
  }

  /**
   * The expanded width of this non-linear ad in pixels.
   */
  get expandedWidth (): number {
    return this._expandedWidth
  }

  set expandedWidth (value: number) {
    this._expandedWidth = value
  }

  /**
   * The expanded height of this non-linear ad in pixels.
   */
  get expandedHeight (): number {
    return this._expandedHeight
  }

  set expandedHeight (value: number) {
    this._expandedHeight = value
  }

  /**
   * Whether this non-linear ad is meant to scale to larger dimensions.
   */
  get scalable (): boolean {
    return this._scalable
  }

  set scalable (value: boolean) {
    this._scalable = value
  }

  /**
   * Whether this non-linear ad's aspect ratio should be maintained when scaled.
   */
  get maintainAspectRatio (): boolean {
    return this._maintainAspectRatio
  }

  set maintainAspectRatio (value: boolean) {
    this._maintainAspectRatio = value
  }

  /**
   * The minimum suggested duration of this non-linear ad in seconds.
   */
  get minSuggestedDuration (): number {
    return this._minSuggestedDuration
  }

  set minSuggestedDuration (value: number) {
    this._minSuggestedDuration = value
  }

  /**
   * The API framework used by this non-linear ad.
   */
  get apiFramework (): string {
    return this._apiFramework
  }

  set apiFramework (value: string) {
    this._apiFramework = value
  }

  /**
   * The resource associated with this non-linear ad.
   */
  get resource (): Resource {
    return this._resource
  }

  set resource (value: Resource) {
    this._resource = value
  }

  /**
   * The clickthrough configuration for this non-linear ad.
   */
  get clickThrough (): Click {
    return this._clickThrough
  }

  set clickThrough (value: Click) {
    this._clickThrough = value
  }

  /**
   * The click tracking configurations for this non-linear ad.
   */
  get clickTrackings (): Click[] {
    return this._clickTrackings
  }

  /**
   * The ad parameters for this non-linear ad.
   */
  get adParameters (): string {
    return this._adParameters
  }

  set adParameters (value: string) {
    this._adParameters = value
  }

  get $type (): Type {
    return 'NonLinear'
  }
}
