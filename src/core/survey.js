/**
 * Represents survey information for data collection.
 */
export class Survey {
  constructor () {
    this._type = null
    this._uri = null
  }

  // Attribute(s).

  /**
   * The MIME type of the resource being served.
   *
   * @type {string}
   */
  get type () {
    return this._type
  }

  set type (value) {
    this._type = value
  }

  // Content.

  /**
   * The URI to any resource relating to an integrated survey.
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
    return 'Survey'
  }
}
