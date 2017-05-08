// @flow

import { Base } from '../base'
import type { Click } from '../util/click'

/**
 * Stores the clickthrough URI and a set of click tracking pixels.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class AbstractClicks extends Base {
  _clickThrough: ?Click
  _clickTrackings: Click[]

  constructor () {
    super()
    this._clickTrackings = []
  }

  /**
   * The click-through configuration.
   */
  get clickThrough (): ?Click {
    return this._clickThrough
  }

  set clickThrough (value: ?Click) {
    this._clickThrough = value
  }

  /**
   * The click tracking configurations.
   */
  get clickTrackings (): Click[] {
    return this._clickTrackings
  }
}
