/**
 * Represents pricing information for real-time bidding.
 */
export class Pricing {
  constructor () {
    this._model = null
    this._currency = null
    this._value = null
  }

  // Attribute(s).

  /**
   * The pricing model. Either `"CPM"`, `"CPC"`, `"CPE"`, or `"CPV"`.
   *
   * @type {string}
   */
  get model () {
    return this._model
  }

  set model (value) {
    this._model = value
  }

  /**
   * The three-letter ISO-4217 currency symbol that identifies the currency of
   * the value provided (e.g. `"USD"`, `"GBP"`, etc.).
   *
   * @type {string}
   */
  get currency () {
    return this._currency
  }

  set currency (value) {
    this._currency = value
  }

  // Content.

  /**
   * The price that can be used in real-time bidding systems.
   *
   * @type {number}
   */
  get value () {
    return this._value
  }

  set value (value) {
    this._value = value
  }

  get $type () {
    return 'Pricing'
  }
}
