// @flow

import { AbstractExtension } from './abstract'

/**
 * Represents a VAST extension.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class Extension extends AbstractExtension {
  get $type (): 'Extension' {
    return 'Extension'
  }
}
