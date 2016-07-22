/**
 * Stores information about the ad system.
 *
 * @class AdSystem
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class AdSystem {
  /**
   * The name of the ad system.
   *
   * @type {string}
   */
  get name () {
    return this._name
  }

  set name (value) {
    this._name = value
  }

  /**
   * The version of the ad system.
   *
   * @type {string}
   */
  get version () {
    return this._version
  }

  set version (value) {
    this._version = value
  }

  get $type () {
    return 'AdSystem'
  }
}
