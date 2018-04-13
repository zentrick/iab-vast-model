import { AbstractTimeOffset } from './abstract'

/**
 * Represents a time offset expressed as an absolute duration in seconds.
 */
export class AbsoluteTimeOffset extends AbstractTimeOffset {
  get $type () {
    return 'AbsoluteTimeOffset'
  }
}
