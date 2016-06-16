/**
 * Base class for VAST {@link Extension} as well as {@link CreativeExtension}.
 *
 * @class AbstractExtension
 * @protected
 * @abstract
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class AbstractExtension {
  /**
   * The type of this extension.
   *
   * @type {string}
   */
  get type () {
    return this._type
  }

  set type (value) {
    this._type = value
  }

  /**
   * The content of this extension.
   *
   * @type {Element}
   */
  get content () {
    return this._content
  }

  set content (value) {
    this._content = value
  }
}
