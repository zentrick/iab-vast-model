import { AbstractVerificationResource } from './abstract'

/**
 * Describes a Flash resource used to collect verification data.
 */
export class FlashResource extends AbstractVerificationResource {
  get $type () {
    return 'FlashResource'
  }
}
