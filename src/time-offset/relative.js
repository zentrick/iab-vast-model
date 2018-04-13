import { AbstractTimeOffset } from './abstract'

/**
 * Represents a time offset expressed as a percentage (between 0 and 100).
 */
export class RelativeTimeOffset extends AbstractTimeOffset {
  get $type () {
    return 'RelativeTimeOffset'
  }
}
