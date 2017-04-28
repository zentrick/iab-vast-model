// @flow

import type { Type } from '../type'

/**
 * Describes a click configuration.
 *
 * @class Click
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Click {
  _id: string
  _uri: string

  /**
   * The ID of this click.
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
   * The URI of this tracking pixel.
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
    return 'Click'
  }
}
