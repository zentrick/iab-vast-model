// @flow

import { AbstractExtension } from './abstract'

/**
 * Represents a creative extension.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class CreativeExtension extends AbstractExtension {
  get $type (): 'CreativeExtension' {
    return 'CreativeExtension'
  }
}
