/**
 * Pricing information for real-time bidding.
 *
 * @class Pricing
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Pricing {
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
   * The pricing currency.
   *
   * @type {string}
   */
  get currency () {
    return this._currency
  }

  set currency (value) {
    this._currency = value
  }

  /**
   * The price.
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
