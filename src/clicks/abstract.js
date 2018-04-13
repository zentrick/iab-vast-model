/**
 * Stores the click-through URI and a set of click-tracking pixels.
 *
 * @abstract
 * @protected
 */
export class AbstractClicks {
  constructor () {
    this._clickThrough = null
    this._clickTrackings = []
  }

  // Children.

  /**
   * The click-through configuration.
   *
   * @type {Click}
   */
  get clickThrough () {
    return this._clickThrough
  }

  set clickThrough (value) {
    this._clickThrough = value
  }

  /**
   * The click-tracking configurations.
   *
   * @type {Click[]}
   */
  get clickTrackings () {
    return this._clickTrackings
  }
}
