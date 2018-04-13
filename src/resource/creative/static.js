import { AbstractResource } from '../abstract'

/**
 * Describes non-HTML creative.
 */
export class StaticResource extends AbstractResource {
  constructor () {
    super()
    this._creativeType = null
  }

  // Attribute(s).

  /**
   * The MIME type of this resource.
   *
   * @type {string}
   */
  get creativeType () {
    return this._creativeType
  }

  set creativeType (value) {
    this._creativeType = value
  }

  get $type () {
    return 'StaticResource'
  }
}
