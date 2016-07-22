import {AbstractExtension} from './abstract'

/**
 * Represents a VAST extension.
 *
 * @class Extension
 * @extends AbstractExtension
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Extension extends AbstractExtension {
  get $type () {
    return 'Extension'
  }
}
