/**
 * Represents an impression.
 */
export class Impression {
  constructor () {
    this._id = null
    this._uri = null
  }

  // Attribute(s).

  /**
   * The ad server id for the impression.
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
   * The URI of this impression resource.
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
    return 'Impression'
  }
}
