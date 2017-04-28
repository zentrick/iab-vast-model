// @flow

import type { TrackingEvent } from './event'
import type { Type } from '../type'

/**
 * Configures tracking events. Binds VAST event types to arrays of
 * {@link TrackingEvent} instances.
 *
 * @class TrackingEvents
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class TrackingEvents {
  _map: { [type: string]: TrackingEvent[] }

  constructor () {
    this._map = Object.create(null)
  }

  /**
   * The event types tracked by this configuration.
   *
   * @type {string[]}
   */
  get types (): string[] {
    return Object.keys(this._map)
  }

  /**
   * Gets the tracking event configurations for the given event type.
   *
   * @param {string} event - the event type.
   * @return {TrackingEvent[]} the tracking event configurations.
   */
  get (event: string): TrackingEvent[] {
    return this._map[event] || []
  }

  /**
   * Adds a tracking event configuration for the given event type.
   *
   * @param {string} event - the event type.
   * @param {TrackingEvent} config - the tracking event configuration.
   */
  add (event: string, config: TrackingEvent) {
    this._map[event] = this._map[event] || []
    this._map[event].push(config)
  }

  get $type (): Type {
    return 'TrackingEvents'
  }
}
