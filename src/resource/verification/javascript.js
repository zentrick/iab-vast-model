import { AbstractVerificationResource } from './abstract'

/**
 * Describes a JavaScript resource used to collect verification data.
 */
export class JavaScriptResource extends AbstractVerificationResource {
  get $type () {
    return 'JavaScriptResource'
  }
}
