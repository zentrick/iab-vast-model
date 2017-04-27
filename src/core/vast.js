// @flow

import { AdBuffet } from './ad-buffet'
import type { Type } from '../type'

/**
 * Represents a VAST document.
 *
 * @class VAST
 * @extends AdBuffet
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class VAST extends AdBuffet {
  _version: string
  _errors: string[]

  constructor () {
    super()
    this._errors = []
  }

  /**
   * The VAST version used by this document.
   *
   * @type {string}
   */
  get version (): string {
    return this._version
  }

  set version (value: string) {
    this._version = value
  }

  /**
   * The error tracking URIs for this document.
   *
   * @type {string[]}
   * @readonly
   */
  get errors (): string[] {
    return this._errors
  }

  get $type (): Type {
    return 'VAST'
  }
}
