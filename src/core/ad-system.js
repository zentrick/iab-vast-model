/**
 * Stores information about the ad system.
 */
export class AdSystem {
  constructor () {
    this._version = null
    this._name = null
  }

  // Attribute(s).

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

  // Content.

  /**
   * The name of the ad server that returned the ad.
   *
   * @type {string}
   */
  get name () {
    return this._name
  }

  set name (value) {
    this._name = value
  }

  get $type () {
    return 'AdSystem'
  }
}
