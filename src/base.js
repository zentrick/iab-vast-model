// @flow

import type { Type } from './type'

export class Base {
  get $type (): Type {
    throw new Error('Abstract method')
  }
}
