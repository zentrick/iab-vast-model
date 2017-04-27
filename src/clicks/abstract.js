// @flow

import type { Click } from '../util/click'

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
  _clickThrough: Click
  _clickTrackings: Click[]

  constructor () {
    this._clickTrackings = []
  }

  /**
   * The click-through configuration.
   *
   * @type {Click}
   */
  get clickThrough (): Click {
    return this._clickThrough
  }

  set clickThrough (value: Click) {
    this._clickThrough = value
  }

  /**
   * The click tracking configurations.
   *
   * @type {Click[]}
   * @readonly
   */
  get clickTrackings (): Click[] {
    return this._clickTrackings
  }
}
