// @flow

import type { Type } from '../type'

type PricingModel = 'CPM' | 'CPC' | 'CPE' | 'CPV'

/**
 * Pricing information for real-time bidding.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Pricing {
  _model: PricingModel
  _currency: string
  _value: number

  /**
   * The pricing model. Either `"CPM"`, `"CPC"`, `"CPE"`, or `"CPV"`.
   */
  get model (): PricingModel {
    return this._model
  }

  set model (value: PricingModel) {
    this._model = value
  }

  /**
   * The pricing currency.
   */
  get currency (): string {
    return this._currency
  }

  set currency (value: string) {
    this._currency = value
  }

  /**
   * The price.
   */
  get value (): number {
    return this._value
  }

  set value (value: number) {
    this._value = value
  }

  get $type (): Type {
    return 'Pricing'
  }
}
