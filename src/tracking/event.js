// @flow

import type { TimeOffset } from '../time-offset/base'
import type { Type } from '../type'

/**
 * Represents a tracking event configuration.
 *
 * @class TrackingEvent
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class TrackingEvent {
  _uri: string[]
  _offset: TimeOffset

  /**
   * The tracking URI for this event configuration.
   *
   * @type {string[]}
   */
  get uri (): string[] {
    return this._uri
  }

  set uri (value: string[]) {
    this._uri = value
  }

  /**
   * The time offset for this event configuration. Only applies to `progress`
   * events.
   *
   * @type {TimeOffset}
   */
  get offset (): TimeOffset {
    return this._offset
  }

  set offset (value: TimeOffset) {
    this._offset = value
  }

  get $type (): Type {
    return 'TrackingEvent'
  }
}
