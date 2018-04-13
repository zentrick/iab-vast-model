/**
 * Represents a list of verification resources for a vendor.
 */
export class Verification {
  constructor () {
    this._vendor = null
    this._javaScriptResources = []
    this._flashResources = []
    this._viewableImpression = null
  }

  // Attribute(s).

  /**
   * The home page URL for the verification service provider that supplies the
   * resource file.
   *
   * @type {string}
   */
  get vendor () {
    return this._vendor
  }

  set vendor (value) {
    this._vendor = value
  }

  // Children.

  /**
   * The JavaScript resources for this verification vendor.
   *
   * @type {JavaScriptResource[]}
   */
  get javaScriptResources () {
    return this._javaScriptResources
  }

  /**
   * The Flash resources for this verification vendor.
   *
   * @type {FlashResource[]}
   */
  get flashResources () {
    return this._flashResources
  }

  /**
   * The viewable impression for this verification vendor.
   *
   * @type {ViewableImpression}
   */
  get viewableImpression () {
    return this._viewableImpression
  }

  set viewableImpression (value) {
    this._viewableImpression = value
  }

  get $type () {
    return 'Verification'
  }
}
