/**
 * Pricing information for real-time bidding.
 */
export class Category {
  constructor () {
    this._authority = null
    this._code = null
  }

  // Attribute(s).

  /**
   * The URL for the organizational authority that produced the list being used
   * to identify the ad content.
   *
   * @type {string}
   */
  get authority () {
    return this._authority
  }

  set authority (value) {
    this._authority = value
  }

  // Content.

  /**
   * The category code or label that identifies the ad content.
   *
   * @type {string}
   */
  get code () {
    return this._code
  }

  set code (value) {
    this._code = value
  }

  get $type () {
    return 'Category'
  }
}
