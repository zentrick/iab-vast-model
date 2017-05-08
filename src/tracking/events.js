// @flow

import { Base } from '../base'
import type { TrackingEvent } from './event'
import type { Type } from '../type'

type EventType =
  'creativeView' |
  'start' |
  'firstQuartile' |
  'midPoint' |
  'thirdQuartile' |
  'complete' |
  'mute' |
  'unmute' |
  'pause' |
  'rewind' |
  'resume' |
  'fullscreen' |
  'exitFullscreen' |
  'expand' |
  'collapse' |
  'acceptInvitation' |
  'close' |
  'skip' |
  'progress'

/**
 * Configures tracking events. Binds VAST event types to arrays of
 * {@link TrackingEvent} instances.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class TrackingEvents extends Base {
  _map: { [type: EventType]: TrackingEvent[] }

  constructor () {
    super()
    this._map = Object.create(null)
  }

  /**
   * The event types tracked by this configuration.
   */
  get types (): string[] {
    return Object.keys(this._map)
  }

  /**
   * Gets the tracking event configurations for the given event type.
   *
   * @param {EventType} event - the event type.
   * @return {TrackingEvent[]} the tracking event configurations.
   */
  get (event: EventType): TrackingEvent[] {
    return this._map[event] || []
  }

  /**
   * Adds a tracking event configuration for the given event type.
   *
   * @param {EventType} event - the event type.
   * @param {TrackingEvent} config - the tracking event configuration.
   */
  add (event: EventType, config: TrackingEvent) {
    this._map[event] = this._map[event] || []
    this._map[event].push(config)
  }

  get $type (): Type {
    return 'TrackingEvents'
  }
}
