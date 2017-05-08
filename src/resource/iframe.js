// @flow

import { Resource } from './base'

/**
 * Describes an HTML page for display within an iframe.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class IFrameResource extends Resource {
  get $type (): 'IFrameResource' {
    return 'IFrameResource'
  }
}
