/**
 * Represents an event to be tracked.
 */
export class TrackingEvent {
  constructor () {
    this._uri = null
    this._offset = null
  }

  // Content.

  /**
   * The tracking URI for this event configuration.
   *
   * @type {string}
   */
  get uri () {
    return this._uri
  }

  set uri (value) {
    this._uri = value
  }

  /**
   * The time offset for this event configuration.
   *
   * @type {TimeOffset}
   */
  get offset () {
    return this._offset
  }

  set offset (value) {
    this._offset = value
  }

  get $type () {
    return 'TrackingEvent'
  }
}
