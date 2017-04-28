// @flow

import { Resource } from './base'
import type { Type } from '../type'

/**
 * Describes an HTML page for display within an iframe.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class IFrameResource extends Resource {
  get $type (): Type {
    return 'IFrameResource'
  }
}
