/**
 * Represents a tracking event configuration.
 *
 * @class TrackingEvent
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class TrackingEvent {
  /**
   * The tracking URI for this event configuration.
   *
   * @type {string[]}
   */
  get uri () {
    return this._uri
  }

  set uri (value) {
    this._uri = value
  }

  /**
   * The time offset for this event configuration. Only applies to `progress`
   * events.
   *
   * @type {TimeOffset}
   */
  get offset () {
    return this._offset
  }

  set offset (value) {
    this._offset = value
  }
}
