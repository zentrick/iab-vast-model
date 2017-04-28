// @flow

import type { Type } from '../type'

/**
 * Stores information about the ad system.
 *
 * @class AdSystem
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class AdSystem {
  _name: string
  _version: string

  /**
   * The name of the ad system.
   *
   * @type {string}
   */
  get name (): string {
    return this._name
  }

  set name (value: string) {
    this._name = value
  }

  /**
   * The version of the ad system.
   *
   * @type {string}
   */
  get version (): string {
    return this._version
  }

  set version (value: string) {
    this._version = value
  }

  get $type (): Type {
    return 'AdSystem'
  }
}
