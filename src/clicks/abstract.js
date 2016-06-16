/**
 * Stores the clickthrough URI and a set of click tracking pixels.
 *
 * @class AbstractClicks
 * @protected
 * @abstract
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class AbstractClicks {
  constructor () {
    this._clickTrackings = []
  }

  /**
   * The clickthrough URI.
   *
   * @type {string}
   */
  get clickThrough () {
    return this._clickThrough
  }

  set clickThrough (value) {
    this._clickThrough = value
  }

  /**
   * The click tracking configurations.
   *
   * @type {Click[]}
   * @readonly
   */
  get clickTrackings () {
    return this._clickTrackings
  }
}
