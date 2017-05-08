// @flow

import { Creative } from './base'
import { TrackingEvents } from '../tracking/events'
import type { NonLinear } from '../core/non-linear'

/**
 * Represents a creative with non-linear ads.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
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
   */
  get nonLinears (): NonLinear[] {
    return this._nonLinears
  }

  /**
   * The event tracking configuration for this non-linear creative.
   */
  get trackingEvents (): TrackingEvents {
    return this._trackingEvents
  }

  get $type (): 'NonLinearAds' {
    return 'NonLinearAds'
  }
}
