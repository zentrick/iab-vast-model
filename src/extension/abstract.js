// @flow

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
  _type: string
  _content: string

  /**
   * The type of this extension.
   *
   * @type {string}
   */
  get type (): string {
    return this._type
  }

  set type (value: string) {
    this._type = value
  }

  /**
   * The content of this extension.
   *
   * @type {Element}
   */
  get content (): string {
    return this._content
  }

  set content (value: string) {
    this._content = value
  }
}
