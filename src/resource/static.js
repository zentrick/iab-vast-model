// @flow

import { Resource } from './base'

/**
 * Describes non-HTML creative.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class StaticResource extends Resource {
  _creativeType: ?string

  /**
   * The MIME type of this resource.
   */
  get creativeType (): ?string {
    return this._creativeType
  }

  set creativeType (value: ?string) {
    this._creativeType = value
  }

  get $type (): 'StaticResource' {
    return 'StaticResource'
  }
}
