import { AdBuffet } from './ad-buffet'

/**
 * Represents a VAST document.
 *
 * @class VAST
 * @extends AdBuffet
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class VAST extends AdBuffet {
  constructor () {
    super()
    this._errors = []
  }

  /**
   * The VAST version used by this document.
   *
   * @type {string}
   */
  get version () {
    return this._version
  }

  set version (value) {
    this._version = value
  }

  /**
   * The error tracking URIs for this document.
   *
   * @type {string[]}
   * @readonly
   */
  get errors () {
    return this._errors
  }

  get $type () {
    return 'VAST'
  }
}
