// @flow

type Type =
  'AbsoluteTimeOffset' |
  'AdBuffet' |
  'AdPod' |
  'AdSystem' |
  'Click' |
  'Companion' |
  'CompanionAds' |
  'CreativeExtension' |
  'Extension' |
  'HTMLResource' |
  'Icon' |
  'IconClicks' |
  'IFrameResource' |
  'Impression' |
  'InLine' |
  'Linear' |
  'MediaFile' |
  'NonLinear' |
  'NonLinearAds' |
  'Pricing' |
  'RelativeTimeOffset' |
  'SortedList' |
  'StaticResource' |
  'TrackingEvent' |
  'TrackingEvents' |
  'VAST' |
  'VideoClicks' |
  'Wrapper'

/**
 * Base class for all the VAST models.
 *
 * @abstract
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2017 Zentrick nv
 */
export class Base {
  get $type (): Type {
    throw new Error('Abstract method')
  }
}
