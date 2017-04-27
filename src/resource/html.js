// @flow

import { Resource } from './base'

import type { Type } from '../type'

/**
 * Describes an HTML snippet.
 *
 * @class HTMLResource
 * @extends Resource
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class HTMLResource extends Resource {
  get $type (): Type {
    return 'HTMLResource'
  }
}
