// @flow

import { Base } from '../base'

type PricingModel = 'cpc' | 'cpm' | 'cpe' | 'cpv'

/**
 * Pricing information for real-time bidding.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class Pricing extends Base {
  _model: PricingModel
  _currency: string
  _value: number

  /**
   * The pricing model.
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

  get $type (): 'Pricing' {
    return 'Pricing'
  }
}
