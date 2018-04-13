import {AdBuffet} from '../util/ad-buffet'

/**
 * Represents a VAST document.
 */
export class VAST extends AdBuffet {
  constructor () {
    super()
    this._uri = null
    this._version = null
    this._errors = []
  }

  /**
   * The URI associated with this document.
   *
   * @type {string}
   */
  get uri () {
    return this._uri
  }

  set uri (uri) {
    this._uri = uri
  }

  // Attribute(s).

  /**
   * The VAST version used by this document.
   *
   * @type {number}
   */
  get version () {
    return this._version
  }

  set version (value) {
    this._version = value
  }

  // Children.

  /**
   * The error-tracking URIs for this document.
   *
   * @type {string[]}
   */
  get errors () {
    return this._errors
  }

  get $type () {
    return 'VAST'
  }
}
