import { AbstractClicks } from './abstract'

/**
 * Represents the click-tracking configuration for a {@link Linear} creative.
 */
export class VideoClicks extends AbstractClicks {
  constructor () {
    super()
    this._customClicks = []
  }

  // Children.

  /**
   * The custom-click configurations.
   *
   * @type {Click[]}
   */
  get customClicks () {
    return this._customClicks
  }

  get $type () {
    return 'VideoClicks'
  }
}
