import { AbstractResource } from '../abstract'

/**
 * Describes an HTML page for display within an iframe.
 */
export class IFrameResource extends AbstractResource {
  get $type () {
    return 'IFrameResource'
  }
}
