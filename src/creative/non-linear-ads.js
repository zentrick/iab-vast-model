// @flow

import { Creative } from './base'
import { TrackingEvents } from '../tracking/events'

import type { NonLinear } from '../core/non-linear'
import type { Type } from '../type'

/**
 * Represents a creative with non-linear ads.
 *
 * @class NonLinearAds
 * @extends Creative
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class NonLinearAds extends Creative {
  _nonLinears: NonLinear[]
  _trackingEvents: TrackingEvents

  constructor () {
    super()
    this._nonLinears = []
    this._trackingEvents = new TrackingEvents()
  }

  /**
   * The non-linear ads within this creative.
   *
   * @type {NonLinear[]}
   * @readonly
   */
  get nonLinears (): NonLinear[] {
    return this._nonLinears
  }

  /**
   * The event tracking configuration for this non-linear creative.
   *
   * @type {TrackingEvents}
   * @readonly
   */
  get trackingEvents (): TrackingEvents {
    return this._trackingEvents
  }

  get $type (): Type {
    return 'NonLinearAds'
  }
}
