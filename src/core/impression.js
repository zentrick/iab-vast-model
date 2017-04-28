// @flow

import type { Type } from '../type'

/**
 * Represents a tracking pixel configuration for an impression.
 *
 * @class Impression
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Impression {
  _id: string
  _uri: string

  /**
   * The ID of this impression pixel.
   *
   * @type {string}
   */
  get id (): string {
    return this._id
  }

  set id (value: string) {
    this._id = value
  }

  /**
   * The URI of this impression pixel.
   *
   * @type {string}
   */
  get uri (): string {
    return this._uri
  }

  set uri (value: string) {
    this._uri = value
  }

  get $type (): Type {
    return 'Impression'
  }
}
