// @flow

import { Base } from '../base'

/**
 * Represents an item in a {@link SortedList}. Base class for {@link Ad} and
 * {@link Creative}.
 *
 * @abstract
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class SortedListItem extends Base {
  _sequence: ?number

  /**
   * The sequence number of this item within its parent.
   */
  get sequence (): ?number {
    return this._sequence
  }

  set sequence (value: ?number) {
    this._sequence = value
  }

  get $type (): 'CompanionAds' | 'InLine' | 'Linear' | 'Wrapper' | 'NonLinearAds' {
    throw new Error('Abstract method')
  }
}
