import { AbstractExtension } from './abstract'

/**
 * Represents a VAST extension.
 */
export class Extension extends AbstractExtension {
  get $type () {
    return 'Extension'
  }
}
