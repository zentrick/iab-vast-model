/**
 * Base class for VAST {@link Extension} as well as {@link CreativeExtension}.
 *
 * @abstract
 * @protected
 */
export class AbstractExtension {
  constructor () {
    this._type = null
    this._xmlElement = null
  }

  // Attribute(s).

  /**
   * The MIME type of any code that might be included in the extension.
   *
   * @type {string}
   */
  get type () {
    return this._type
  }

  set type (value) {
    this._type = value
  }

  // Content.

  /**
   * The `<Extension>` XML DOM element.
   *
   * @type {Element}
   */
  get xmlElement () {
    return this._xmlElement
  }

  set xmlElement (value) {
    this._xmlElement = value
  }
}
