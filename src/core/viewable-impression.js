/**
 * Represents the impression-tracking URIs for both an {@link InLine} and any
 * {@link Wrapper}.
 */
export class ViewableImpression {
  constructor () {
    this._id = null
    this._viewables = []
    this._notViewables = []
    this._viewUndetermineds = []
  }

  // Attribute(s).

  /**
   * The ad server ID of this viewability impression pixel.
   *
   * @type {string}
   */
  get id () {
    return this._id
  }

  set id (value) {
    this._id = value
  }

  // Children.

  /**
   * The URIs that direct the video player to a tracking resource file that the
   * video player should request at the time that criteria is met for a viewable
   * impression.
   *
   * @type {string[]}
   */
  get viewables () {
    return this._viewables
  }

  /**
   * The URIs that direct the video player to a tracking resource file that the
   * video player should request if the ad is executed but never meets criteria
   * for a viewable impression.
   *
   * @type {string[]}
   */
  get notViewables () {
    return this._notViewables
  }

  /**
   * The URIs that direct the video player to a tracking resource file that the
   * video player should request if the player cannot determine whether criteria
   * is met for a viewable impression.
   *
   * @type {string[]}
   */
  get viewUndetermineds () {
    return this._viewUndetermineds
  }

  get $type () {
    return 'ViewableImpression'
  }
}
