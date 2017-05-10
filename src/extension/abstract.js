// @flow

import { Base } from '../base'

/**
 * Base class for VAST {@link Extension} as well as {@link CreativeExtension}.
 *
 * @abstract
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class AbstractExtension extends Base {
  _type: ?string
  _content: string

  /**
   * The type of this extension.
   */
  get type (): ?string {
    return this._type
  }

  set type (value: ?string) {
    this._type = value
  }

  /**
   * The content of this extension.
   */
  get content (): string {
    return this._content
  }

  set content (value: string) {
    this._content = value
  }

  get $type (): 'Extension' | 'CreativeExtension' {
    throw new Error('Abstract method')
  }
}
