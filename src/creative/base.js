// @flow

import { SortedListItem } from '../util/sorted-list-item'
import type { CreativeExtension } from '../extension/creative'

/**
 * Base class for creatives.
 *
 * @class Creative
 * @abstract
 * @extends SortedListItem
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Creative extends SortedListItem {
  _id: string
  _adID: string
  _apiFramework: string
  _extensions: CreativeExtension[]

  constructor () {
    super()
    this._extensions = []
  }

  /**
   * The ID of this creative.
   *
   * @type {string}
   */
  get id (): string {
    return this._id
  }

  set id (value: string) {
    this._id = value
  }

  /**
   * The ID of the {@link Ad} with which this creative is served.
   *
   * @type {string}
   */
  get adID (): string {
    return this._adID
  }

  set adID (value: string) {
    this._adID = value
  }

  /**
   * The API framework used by this creative.
   *
   * @type {string}
   */
  get apiFramework (): string {
    return this._apiFramework
  }

  set apiFramework (value: string) {
    this._apiFramework = value
  }

  /**
   * The creative extensions for this creative.
   *
   * @type {CreativeExtension[]}
   * @readonly
   */
  get extensions (): CreativeExtension[] {
    return this._extensions
  }
}
