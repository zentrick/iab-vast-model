import { AbstractResource } from '../abstract'

/**
 * Base class for a verification resource used by a {@link FlashResource} and a
 * {@link JavaScriptResource}.
 *
 * @abstract
 * @protected
 */
export class AbstractVerificationResource extends AbstractResource {
  constructor () {
    super()
    this._apiFramework = null
  }

  // Attribute(s).

  /**
   * The name of the API framework.
   *
   * @type {string}
   */
  get apiFramework () {
    return this._apiFramework
  }

  set apiFramework (value) {
    this._apiFramework = value
  }
}
