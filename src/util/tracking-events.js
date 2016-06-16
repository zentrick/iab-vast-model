/**
 * Configures tracking events. Binds VAST event types to URIs.
 *
 * @class TrackingEvents
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
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
   * Gets the tracking URIs for the given event type.
   *
   * @param {string} event - the event type.
   * @return {string[]} the URIs.
   */
  get (event) {
    return this._map[event] || []
  }

  /**
   * Adds a tracking URI for the given event type.
   *
   * @param {string} event - the event type.
   * @param {string} uri - the URI.
   */
  add (event, uri) {
    this._map[event] = this._map[event] || []
    this._map[event].push(uri)
  }
}
