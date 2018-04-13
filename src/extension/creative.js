import { AbstractExtension } from './abstract'

/**
 * Represents a creative extension.
 */
export class CreativeExtension extends AbstractExtension {
  get $type () {
    return 'CreativeExtension'
  }
}
