/**
 * Represents a unique identifier for an ad.
 */
export class UniversalAdId {
  constructor () {
    this._idRegistry = 'unknown'
    this._idValue = 'unknown'
    this._creativeIdentifier = null
  }

  // Attribute(s).

  /**
   * The registry URL for the unique creative identifier.
   *
   * @type {string}
   */
  get idRegistry () {
    return this._idRegistry
  }

  set idRegistry (value) {
    this._idRegistry = value
  }

  /**
   * A string for the unique creative identifier.
   *
   * @type {string}
   */
  get idValue () {
    return this._idValue
  }

  set idValue (value) {
    this._idValue = value
  }

  // Content.

  /**
   * The string identifying the unique creative identifier.
   *
   * @type {string}
   */
  get creativeIdentifier () {
    return this._creativeIdentifier
  }

  set creativeIdentifier (value) {
    this._creativeIdentifier = value
  }

  get $type () {
    return 'UniversalAdId'
  }
}
