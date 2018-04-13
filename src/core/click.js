/**
 * Describes a click configuration.
 */
export class Click {
  constructor () {
    this._id = null
    this._uri = null
  }

  // Attribute(s).

  /**
   * The ID of this click.
   *
   * @type {string}
   */
  get id () {
    return this._id
  }

  set id (value) {
    this._id = value
  }

  // Content.

  /**
   * The URI of this tracking pixel.
   *
   * @type {string}
   */
  get uri () {
    return this._uri
  }

  set uri (value) {
    this._uri = value
  }

  get $type () {
    return 'Click'
  }
}
