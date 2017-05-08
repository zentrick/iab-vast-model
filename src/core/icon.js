// @flow

import { Base } from '../base'
import { IconClicks } from '../clicks/icon'
import type { Resource } from '../resource/base'
import type { Click } from '../util/click'
import type { Type } from '../type'

/**
 * Represents an icon used in a {@link Linear} creative.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Icon extends Base {
  _program: string
  _width: number
  _height: number
  _xPosition: number
  _yPosition: number
  _duration: ?number
  _offset: ?number
  _apiFramework: ?string
  _resource: ?Resource
  _clicks: IconClicks
  _viewTrackings: Click[]

  constructor () {
    super()
    this._clicks = new IconClicks()
    this._viewTrackings = []
  }

  /**
   * The industry initiative that this icon supports.
   */
  get program (): string {
    return this._program
  }

  set program (value: string) {
    this._program = value
  }

  /**
   * The width of this icon in pixels.
   */
  get width (): number {
    return this._width
  }

  set width (value: number) {
    this._width = value
  }

  /**
   * The height of this icon in pixels.
   */
  get height (): number {
    return this._height
  }

  set height (value: number) {
    this._height = value
  }

  /**
   * The horizontal position of this icon in pixels.
   */
  get xPosition (): number {
    return this._xPosition
  }

  set xPosition (value: number) {
    this._xPosition = value
  }

  /**
   * The vertical position of this icon in pixels.
   */
  get yPosition (): number {
    return this._yPosition
  }

  set yPosition (value: number) {
    this._yPosition = value
  }

  /**
   * The duration of this icon in seconds.
   */
  get duration (): ?number {
    return this._duration
  }

  set duration (value: ?number) {
    this._duration = value
  }

  /**
   * The time offset of this icon in seconds.
   */
  get offset (): ?number {
    return this._offset
  }

  set offset (value: ?number) {
    this._offset = value
  }

  /**
   * The API framework used by this icon.
   */
  get apiFramework (): ?string {
    return this._apiFramework
  }

  set apiFramework (value: ?string) {
    this._apiFramework = value
  }

  /**
   * The resource associated with this icon.
   */
  get resource (): ?Resource {
    return this._resource
  }

  set resource (value: ?Resource) {
    this._resource = value
  }

  /**
   * The click tracking configuration for this icon.
   */
  get clicks (): IconClicks {
    return this._clicks
  }

  /**
   * The view tracking configuration.
   */
  get viewTrackings (): Click[] {
    return this._viewTrackings
  }

  get $type (): Type {
    return 'Icon'
  }
}
