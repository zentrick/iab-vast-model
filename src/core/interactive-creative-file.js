/**
 * Represents an interactive creative file used in a {@link Linear} creative.
 */
export class InteractiveCreativeFile {
  constructor () {
    this._type = null
    this._apiFramework = null
    this._url = null
  }

  // Attribute(s).

  /**
   * The MIME type of this interactive creative file.
   *
   * @type {string}
   */
  get type () {
    return this._type
  }

  set type (value) {
    this._type = value
  }

  /**
   * The API framework used by this interactive creative file.
   *
   * @type {string}
   */
  get apiFramework () {
    return this._apiFramework
  }

  set apiFramework (value) {
    this._apiFramework = value
  }

  // Content.

  /**
   * The URI to this interactive creative file.
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
    return 'InteractiveCreativeFile'
  }
}
