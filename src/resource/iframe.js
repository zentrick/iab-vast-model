import {Resource} from './base'

/**
 * Describes an HTML page for display within an iframe.
 *
 * @class IFrameResource
 * @extends Resource
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class IFrameResource extends Resource {
  get $type () {
    return 'IFrameResource'
  }
}
