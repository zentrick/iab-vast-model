/**
 * Configures tracking events. Maps VAST event types to arrays of
 * {@link TrackingEvent} instances.
 */
export class TrackingEvents {
  constructor () {
    this._map = Object.create(null)
  }

  /**
   * The event types tracked by this configuration.
   *
   * @type {string[]}
   */
  get types () {
    return Object.keys(this._map)
  }

  /**
   * Gets the tracking-event configurations for the given event type.
   *
   * @param {string} event - the event type.
   * @return {TrackingEvent[]} the tracking event configurations.
   */
  get (event) {
    return this._map[event] || []
  }

  /**
   * Adds a tracking-event configuration for the given event type.
   *
   * @param {string} event - the event type.
   * @param {TrackingEvent} config - the tracking event configuration.
   */
  add (event, config) {
    this._map[event] = this._map[event] || []
    this._map[event].push(config)
  }

  get $type () {
    return 'TrackingEvents'
  }
}
