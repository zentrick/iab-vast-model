// @flow

import { Base } from '../base'

/**
 * Base class for a resource used by an {@link Icon}, a {@link Companion}, or
 * a {@link NonLinear}.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class Resource extends Base {
  _content: string

  /**
   * The content of this resource.
   */
  get content (): string {
    return this._content
  }

  set content (value: string) {
    this._content = value
  }

  get $type (): 'HTMLResource' | 'IFrameResource' | 'StaticResource' {
    throw new Error('Abstract method')
  }
}
