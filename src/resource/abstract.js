/**
 * Base class for a verification resource used by a {@link HTMLResource}, a
 * {@link IFrameResource} and a {@link StaticResource}.
 *
 * @abstract
 * @protected
 */
export class AbstractResource {
  constructor () {
    this._uri = null
  }

  // Content.

  /**
   * The URI to this resource.
   *
   * @type {string}
   */
  get uri () {
    return this._uri
  }

  set uri (value) {
    this._uri = value
  }
}
