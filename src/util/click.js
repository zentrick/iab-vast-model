// @flow

import { Base } from '../base'
import type { Type } from '../type'

/**
 * Describes a click configuration.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class Click extends Base {
  _id: ?string
  _uri: string

  /**
   * The ID of this click.
   */
  get id (): ?string {
    return this._id
  }

  set id (value: ?string) {
    this._id = value
  }

  /**
   * The URI of this tracking pixel.
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
