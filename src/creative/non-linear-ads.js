import {Creative} from './base'
import {TrackingEvents} from '../util/tracking-events'

/**
 * Represents a creative with non-linear ads.
 *
 * @class NonLinearAds
 * @extends Creative
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class NonLinearAds extends Creative {
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
  get nonLinears () {
    return this._nonLinears
  }

  /**
   * The event tracking configuration for this non-linear creative.
   *
   * @type {TrackingEvents}
   * @readonly
   */
  get trackingEvents () {
    return this._trackingEvents
  }
}
