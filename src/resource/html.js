// @flow

import { Resource } from './base'

/**
 * Describes an HTML snippet.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class HTMLResource extends Resource {
  get $type (): 'HTMLResource' {
    return 'HTMLResource'
  }
}
