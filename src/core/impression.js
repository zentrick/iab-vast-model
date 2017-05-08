// @flow

import { Base } from '../base'

/**
 * Represents a tracking pixel configuration for an impression.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class Impression extends Base {
  _id: ?string
  _uri: string

  /**
   * The ID of this impression pixel.
   */
  get id (): ?string {
    return this._id
  }

  set id (value: ?string) {
    this._id = value
  }

  /**
   * The URI of this impression pixel.
   */
  get uri (): string {
    return this._uri
  }

  set uri (value: string) {
    this._uri = value
  }

  get $type (): 'Impression' {
    return 'Impression'
  }
}
