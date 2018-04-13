import { AbstractClicks } from './abstract'

/**
 * Represents the click tracking configuration for an {@link Icon}.
 */
export class IconClicks extends AbstractClicks {
  get $type () {
    return 'IconClicks'
  }
}
