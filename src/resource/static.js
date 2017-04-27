// @flow

import { Resource } from './base'
import type { Type } from '../type'

/**
 * Describes non-HTML creative.
 *
 * @class StaticResource
 * @extends Resource
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class StaticResource extends Resource {
  _creativeType: string

  /**
   * The MIME type of this resource.
   *
   * @type {string}
   */
  get creativeType (): string {
    return this._creativeType
  }

  set creativeType (value: string) {
    this._creativeType = value
  }

  get $type (): Type {
    return 'StaticResource'
  }
}
