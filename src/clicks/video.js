import { AbstractClicks } from './abstract'

/**
 * Represents the click tracking configuration for a {@link Linear} creative.
 *
 * @class VideoClicks
 * @extends AbstractClicks
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class VideoClicks extends AbstractClicks {
  constructor () {
    super()
    this._customClicks = []
  }

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
