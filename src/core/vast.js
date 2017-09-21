// @flow

import { SortedList } from '../util/sorted-list'
import { Base } from '../base'
import type { Ad } from '../ad/base'
// import { Wrapper } from '../ad/wrapper'

/**
 * Represents a VAST document.
 *
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class VAST extends Base {
  _version: string
  _errors: string[]
  // _parent: ?Wrapper

  _adPod: SortedList<Ad>
  _adBuffet: SortedList<Ad>

  constructor () {
    super()
    this._errors = []
    // this._parent = null
    this._adPod = new SortedList()
    this._adBuffet = new SortedList()
  }

  /**
   * The VAST version used by this document.
   */
  get version (): string {
    return this._version
  }

  set version (value: string) {
    this._version = value
  }

  /**
   * The error tracking URIs for this document.
   */
  get errors (): string[] {
    return this._errors
  }

  /**
   * This property contains a reference to the VAST wrapper,
   * if this VAST instance is wrapped by another.
   */
  // get parent (): ?Wrapper {
  //   return this._parent
  // }
  //
  // set parent (value: ?Wrapper) {
  //   this._parent = value
  // }

  /**
   * The depth of this VAST document within the VAST chain.
   */
  // get depth (): number {
  //   let depth = 0
  //   let parentWrapper = this._parent
  //
  //   while (parentWrapper != null) {
  //     depth++
  //     // We need to move up two levels:
  //     // 1. From the parent Wrapper to its parent VAST
  //     // 2. From the parent VAST to its maybe parent Wrapper
  //     parentWrapper = parentWrapper.parent.parent
  //   }
  //
  //   return depth
  // }

  /**
   * The ad pod of this VAST document.
   */
  get adPod (): SortedList<Ad> {
    return this._adPod
  }

  /**
   * The ad buffet of this VAST document.
   */
  get adBuffet (): SortedList<Ad> {
    return this._adBuffet
  }

  /**
   * This will check if this VAST was wrapped and check if additional VAST
   * wrappers should be loaded.
   */
  // followAdditionalWrappers (): boolean {
  //   // followAdditionalWrappers can be undefined so we explicitly need to check for false.
  //   return this._parent == null || this._parent.followAdditionalWrappers !== false
  // }

  get $type (): 'VAST' {
    return 'VAST'
  }
}
