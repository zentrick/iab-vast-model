import { SortedListItem } from '../util/sorted-list-item'

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
  constructor () {
    super()
    this._extensions = []
  }

  /**
   * The ID of this creative.
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
   * The ID of the {@link Ad} with which this creative is served.
   *
   * @type {string}
   */
  get adID () {
    return this._adID
  }

  set adID (value) {
    this._adID = value
  }

  /**
   * The API framework used by this creative.
   *
   * @type {string}
   */
  get apiFramework () {
    return this._apiFramework
  }

  set apiFramework (value) {
    this._apiFramework = value
  }

  /**
   * The creative extensions for this creative.
   *
   * @type {CreativeExtension[]}
   * @readonly
   */
  get extensions () {
    return this._extensions
  }
}
