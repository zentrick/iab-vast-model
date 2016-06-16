import {Linear} from '../../../src/creative/linear'
import {VideoClicks} from '../../../src/clicks/video'
import {TrackingEvents} from '../../../src/util/tracking-events'
import {AbsoluteSkipoffset} from '../../../src/skipoffset/absolute'
import testBase from './_base'

describe('Linear', () => {
  const createInstance = () => {
    const inst = new Linear()
    return inst
  }

  testBase(createInstance)

  describe('#mediaFiles', () => {
    it('gets mediaFiles', () => {
      const inst = createInstance()
      expect(inst.mediaFiles).to.be.an.instanceof(Array)
    })
  })

  describe('#trackingEvents', () => {
    it('gets trackingEvents', () => {
      const inst = createInstance()
      expect(inst.trackingEvents).to.be.an.instanceof(TrackingEvents)
    })
  })

  describe('#videoClicks', () => {
    it('gets videoClicks', () => {
      const inst = createInstance()
      expect(inst.videoClicks).to.be.an.instanceof(VideoClicks)
    })
  })

  describe('#icons', () => {
    it('gets icons', () => {
      const inst = createInstance()
      expect(inst.icons).to.be.an.instanceof(Array)
    })
  })

  describe('#skipoffset', () => {
    it('sets skipoffset', () => {
      const inst = createInstance()
      const value = new AbsoluteSkipoffset()
      value.value = 12.6
      inst.skipoffset = value
      expect(inst.skipoffset).to.equal(value)
    })
  })

  describe('#adParameters', () => {
    it('sets adParameters', () => {
      const inst = createInstance()
      const value = {}
      inst.adParameters = value
      expect(inst.adParameters).to.equal(value)
    })
  })

  describe('#duration', () => {
    it('sets duration', () => {
      const inst = createInstance()
      const value = 12.34
      inst.duration = value
      expect(inst.duration).to.equal(value)
    })
  })
})
