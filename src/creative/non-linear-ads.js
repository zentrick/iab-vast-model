/**
 * Represents non-linear ads within a {@link Creative}.
 */
export class NonLinearAds {
  constructor () {
    this._nonLinears = []
    this._trackingEvents = null
  }

  // Children.

  /**
   * The non-linear ads.
   *
   * @type {NonLinear[]}
   */
  get nonLinears () {
    return this._nonLinears
  }

  /**
   * The event-tracking configuration.
   *
   * @type {TrackingEvents}
   */
  get trackingEvents () {
    return this._trackingEvents
  }

  set trackingEvents (value) {
    this._trackingEvents = value
  }

  get $type () {
    return 'NonLinearAds'
  }
}
