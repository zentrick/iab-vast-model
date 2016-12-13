import { SortedList } from '../util/sorted-list'
import { SortedListItem } from '../util/sorted-list-item'

/**
 * Base class for ads.
 *
 * @class Ad
 * @abstract
 * @extends SortedListItem
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Ad extends SortedListItem {
  constructor () {
    super()
    this._creatives = new SortedList()
    this._impressions = []
    this._errors = []
    this._extensions = []
  }

  /**
   * The ID of this ad.
   *
   * @type {string}
   */
  get id () {
    return this._id
  }

  set id (value) {
    this._id = value
  }

  /**
   * The ad system for this ad.
   *
   * @type {AdSystem}
   */
  get adSystem () {
    return this._adSystem
  }

  set adSystem (value) {
    this._adSystem = value
  }

  /**
   * The creatives for this ad.
   *
   * @type {SortedList}
   * @readonly
   */
  get creatives () {
    return this._creatives
  }

  /**
   * The impression tracking configurations for this ad.
   *
   * @type {Impression[]}
   * @readonly
   */
  get impressions () {
    return this._impressions
  }

  /**
   * The error tracking URIs for this ad.
   *
   * @type {string[]}
   * @readonly
   */
  get errors () {
    return this._errors
  }

  /**
   * The error tracking URI for this ad.
   *
   * @type {string}
   * @deprecated superseded by .errors
   */
  get error () {
    console.warn('Ad.error is deprecated. Please use ad.errors instead.')
    return this._errors[0]
  }

  set error (value) {
    this._errors[0] = value
  }

  /**
   * The extensions for this ad.
   *
   * @type {Extension[]}
   * @readonly
   */
  get extensions () {
    return this._extensions
  }
}
