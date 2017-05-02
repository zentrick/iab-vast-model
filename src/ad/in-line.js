// @flow

import { Ad } from './base'
import type { Pricing } from '../core/pricing'
import type { Type } from '../type'

/**
 * Inline ad.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class InLine extends Ad {
  _adTitle: string
  _description: string
  _advertiser: string
  _survey: string
  _pricing: Pricing

  /**
   * The title for this ad.
   */
  get adTitle (): string {
    return this._adTitle
  }

  set adTitle (value: string) {
    this._adTitle = value
  }

  /**
   * The description for this ad.
   */
  get description (): string {
    return this._description
  }

  set description (value: string) {
    this._description = value
  }

  /**
   * The advertiser name for this ad.
   */
  get advertiser (): string {
    return this._advertiser
  }

  set advertiser (value: string) {
    this._advertiser = value
  }

  /**
   * The survey URI for this ad.
   */
  get survey (): string {
    return this._survey
  }

  set survey (value: string) {
    this._survey = value
  }

  /**
   * The pricing configuration for this ad.
   */
  get pricing (): Pricing {
    return this._pricing
  }

  set pricing (value: Pricing) {
    this._pricing = value
  }

  get $type (): Type {
    return 'InLine'
  }
}
