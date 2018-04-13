import { Linear } from '../../../src/creative/linear'
import { AbsoluteTimeOffset } from '../../../src/time-offset/absolute'
import { VideoClicks } from '../../../src/clicks/video'
import { TrackingEvents } from '../../../src/core/tracking-events'

describe('Linear', () => {
  const createInstance = () => {
    const inst = new Linear()
    return inst
  }

  describe('#skipoffset', () => {
    it('sets skipoffset', () => {
      const inst = createInstance()
      const value = new AbsoluteTimeOffset()
      value.value = 12.6
      inst.skipoffset = value
      expect(inst.skipoffset).to.equal(value)
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

  describe('#mezzanine', () => {
    it('sets mezzanine', () => {
      const inst = createInstance()
      const value = '<![CDATA[/fixtures/hq.mp4]]>'
      inst.mezzanine = value
      expect(inst.mezzanine).to.equal(value)
    })
  })

  describe('#mediaFiles', () => {
    it('gets mediaFiles', () => {
      const inst = createInstance()
      expect(inst.mediaFiles).to.be.an.instanceof(Array)
    })
  })

  describe('#interactiveCreativeFiles', () => {
    it('gets interactiveCreativeFiles', () => {
      const inst = createInstance()
      expect(inst.interactiveCreativeFiles).to.be.an.instanceof(Array)
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

  describe('#videoClicks', () => {
    it('sets videoClicks', () => {
      const inst = createInstance()
      const value = new VideoClicks()
      inst.videoClicks = value
      expect(inst.videoClicks).to.equal(value)
    })
  })

  describe('#trackingEvents', () => {
    it('sets trackingEvents', () => {
      const inst = createInstance()
      const value = new TrackingEvents()
      inst.trackingEvents = value
      expect(inst.trackingEvents).to.equal(value)
    })
  })

  describe('#icons', () => {
    it('gets icons', () => {
      const inst = createInstance()
      expect(inst.icons).to.be.an.instanceof(Array)
    })
  })

  describe('#$type', () => {
    it('is Linear', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('Linear')
    })
  })
})
