import { AbstractResource } from '../abstract'

/**
 * Describes an HTML snippet.
 */
export class HTMLResource extends AbstractResource {
  get $type () {
    return 'HTMLResource'
  }
}
