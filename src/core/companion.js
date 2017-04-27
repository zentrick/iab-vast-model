// @flow

import { TrackingEvents } from '../tracking/events'
import type { Resource } from '../resource/base'
import type { Click } from '../util/click'

/**
 * Represents a single companion ad. Used in a {@link CompanionAds} creative.
 *
 * @class Companion
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Companion {
  _id: string
  _width: number
  _height: number
  _assetWidth: number
  _assetHeight: number
  _expandedWidth: number
  _expandedHeight: number
  _apiFramework: string
  _adSlotID: string
  _resource: Resource
  _adParameters: string
  _altText: string
  _clickThrough: Click
  _clickTrackings: Click[]
  _trackingEvents: TrackingEvents

  constructor () {
    this._clickTrackings = []
    this._trackingEvents = new TrackingEvents()
  }

  /**
   * The ID for this companion ad.
   *
   * @type {string}
   */
  get id (): string {
    return this._id
  }

  set id (value: string) {
    this._id = value
  }

  /**
   * The width of this companion ad in pixels.
   *
   * @type {number}
   */
  get width (): number {
    return this._width
  }

  set width (value: number) {
    this._width = value
  }

  /**
   * The height of this companion ad in pixels.
   *
   * @type {number}
   */
  get height (): number {
    return this._height
  }

  set height (value: number) {
    this._height = value
  }

  /**
   * The width of this companion ad's asset in pixels.
   *
   * @type {number}
   */
  get assetWidth (): number {
    return this._assetWidth
  }

  set assetWidth (value: number) {
    this._assetWidth = value
  }

  /**
   * The height of this companion ad's asset in pixels.
   *
   * @type {number}
   */
  get assetHeight (): number {
    return this._assetHeight
  }

  set assetHeight (value: number) {
    this._assetHeight = value
  }

  /**
   * The expanded width of this companion ad in pixels.
   *
   * @type {number}
   */
  get expandedWidth (): number {
    return this._expandedWidth
  }

  set expandedWidth (value: number) {
    this._expandedWidth = value
  }

  /**
   * The expanded height of this companion ad in pixels.
   *
   * @type {number}
   */
  get expandedHeight (): number {
    return this._expandedHeight
  }

  set expandedHeight (value: number) {
    this._expandedHeight = value
  }

  /**
   * The API framework used by this companion ad.
   *
   * @type {string}
   */
  get apiFramework (): string {
    return this._apiFramework
  }

  set apiFramework (value: string) {
    this._apiFramework = value
  }

  /**
   * The ad slot ID of this companion ad.
   *
   * @type {string}
   */
  get adSlotID (): string {
    return this._adSlotID
  }

  set adSlotID (value: string) {
    this._adSlotID = value
  }

  /**
   * The resource associated with this companion ad.
   *
   * @type {Resource}
   */
  get resource (): Resource {
    return this._resource
  }

  set resource (value: Resource) {
    this._resource = value
  }

  /**
   * The ad parameters for this companion ad.
   *
   * @type {string}
   */
  get adParameters (): string {
    return this._adParameters
  }

  set adParameters (value: string) {
    this._adParameters = value
  }

  /**
   * The alt text of this companion ad.
   *
   * @type {string}
   */
  get altText (): string {
    return this._altText
  }

  set altText (value: string) {
    this._altText = value
  }

  /**
   * The clickthrough configuration for this companion ad.
   *
   * @type {Click}
   */
  get clickThrough (): Click {
    return this._clickThrough
  }

  set clickThrough (value: Click) {
    this._clickThrough = value
  }

  /**
   * The click tracking configurations for this companion ad.
   *
   * @type {Click[]}
   * @readonly
   */
  get clickTrackings (): Click[] {
    return this._clickTrackings
  }

  /**
   * The tracking event configuration for this companion ad.
   *
   * @type {TrackingEvents}
   * @readonly
   */
  get trackingEvents (): TrackingEvents {
    return this._trackingEvents
  }

  get $type (): 'Companion' {
    return 'Companion'
  }
}
