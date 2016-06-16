import {Resource} from './base'

/**
 * Describes non-HTML creative.
 *
 * @class StaticResource
 * @extends Resource
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class StaticResource extends Resource {
  /**
   * The MIME type of this resource.
   *
   * @type {string}
   */
  get creativeType () {
    return this._creativeType
  }

  set creativeType (value) {
    this._creativeType = value
  }
}
