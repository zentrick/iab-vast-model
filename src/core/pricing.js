// @flow

/**
 * Pricing information for real-time bidding.
 *
 * @class Pricing
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Pricing {
  _model: string
  _currency: string
  _value: number

  /**
   * The pricing model. Either `"CPM"`, `"CPC"`, `"CPE"`, or `"CPV"`.
   *
   * @type {string}
   */
  get model (): string {
    return this._model
  }

  set model (value: string) {
    this._model = value
  }

  /**
   * The pricing currency.
   *
   * @type {string}
   */
  get currency (): string {
    return this._currency
  }

  set currency (value: string) {
    this._currency = value
  }

  /**
   * The price.
   *
   * @type {number}
   */
  get value (): number {
    return this._value
  }

  set value (value: number) {
    this._value = value
  }

  get $type (): 'Pricing' {
    return 'Pricing'
  }
}
