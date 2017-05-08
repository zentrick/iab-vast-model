// @flow

import { AbstractClicks } from './abstract'

/**
 * Represents the click tracking configuration for an {@link Icon}.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class IconClicks extends AbstractClicks {
  get $type (): 'IconClicks' {
    return 'IconClicks'
  }
}
