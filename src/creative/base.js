/**
 * Base class for creatives.
 *
 * @class Creative
 * @abstract
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Creative {
  constructor () {
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
   * The sequence number of this creative within its {@link Ad}.
   *
   * @type {string}
   */
  get sequence () {
    return this._sequence
  }

  set sequence (value) {
    this._sequence = value
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
