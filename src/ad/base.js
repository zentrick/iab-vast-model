// @flow

import { SortedList } from '../util/sorted-list'
import { SortedListItem } from '../util/sorted-list-item'
import type { AdSystem } from '../core/ad-system'
import type { Creative } from '../creative/base'
import type { Impression } from '../core/impression'
import type { Extension } from '../extension/default'

/**
 * Base class for ads.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Ad extends SortedListItem {
  _id: string
  _adSystem: AdSystem

  _creatives: SortedList<Creative>
  _impressions: Impression[]
  _errors: string[]
  _extensions: Extension[]

  constructor () {
    super()
    this._creatives = new SortedList()
    this._impressions = []
    this._errors = []
    this._extensions = []
  }

  /**
   * The ID of this ad.
   */
  get id (): string {
    return this._id
  }

  set id (value: string) {
    this._id = value
  }

  /**
   * The ad system for this ad.
   */
  get adSystem (): AdSystem {
    return this._adSystem
  }

  set adSystem (value: AdSystem) {
    this._adSystem = value
  }

  /**
   * The creatives for this ad.
   */
  get creatives (): SortedList<Creative> {
    return this._creatives
  }

  /**
   * The impression tracking configurations for this ad.
   */
  get impressions (): Impression[] {
    return this._impressions
  }

  /**
   * The error tracking URIs for this ad.
   */
  get errors (): string[] {
    return this._errors
  }

  /**
   * The error tracking URI for this ad.
   * @deprecated superseded by .errors
   */
  get error (): string {
    console.warn('Ad.error is deprecated. Please use ad.errors instead.')
    return this._errors[0]
  }

  set error (value: string) {
    console.warn('Ad.error is deprecated. Please use ad.errors instead.')
    this._errors[0] = value
  }

  /**
   * The extensions for this ad.
   */
  get extensions (): Extension[] {
    return this._extensions
  }
}
