import {Companion} from '../../../src/core/companion'
import {TrackingEvents} from '../../../src/tracking/events'
import {StaticResource} from '../../../src/resource/static'

describe('Companion', () => {
  const createInstance = () => {
    const inst = new Companion()
    return inst
  }

  describe('#clickTrackings', () => {
    it('gets clickTrackings', () => {
      const inst = createInstance()
      expect(inst.clickTrackings).to.be.an.instanceof(Array)
    })
  })

  describe('#trackingEvents', () => {
    it('gets trackingEvents', () => {
      const inst = createInstance()
      expect(inst.trackingEvents).to.be.an.instanceof(TrackingEvents)
    })
  })

  describe('#id', () => {
    it('sets id', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.id = value
      expect(inst.id).to.equal(value)
    })
  })

  describe('#width', () => {
    it('sets width', () => {
      const inst = createInstance()
      const value = 960
      inst.width = value
      expect(inst.width).to.equal(value)
    })
  })

  describe('#height', () => {
    it('sets height', () => {
      const inst = createInstance()
      const value = 540
      inst.height = value
      expect(inst.height).to.equal(value)
    })
  })

  describe('#assetWidth', () => {
    it('sets assetWidth', () => {
      const inst = createInstance()
      const value = 480
      inst.assetWidth = value
      expect(inst.assetWidth).to.equal(value)
    })
  })

  describe('#assetHeight', () => {
    it('sets assetHeight', () => {
      const inst = createInstance()
      const value = 320
      inst.assetHeight = value
      expect(inst.assetHeight).to.equal(value)
    })
  })

  describe('#expandedWidth', () => {
    it('sets expandedWidth', () => {
      const inst = createInstance()
      const value = 800
      inst.expandedWidth = value
      expect(inst.expandedWidth).to.equal(value)
    })
  })

  describe('#expandedHeight', () => {
    it('sets expandedHeight', () => {
      const inst = createInstance()
      const value = 600
      inst.expandedHeight = value
      expect(inst.expandedHeight).to.equal(value)
    })
  })

  describe('#apiFramework', () => {
    it('sets apiFramework', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.apiFramework = value
      expect(inst.apiFramework).to.equal(value)
    })
  })

  describe('#adSlotID', () => {
    it('sets adSlotID', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.adSlotID = value
      expect(inst.adSlotID).to.equal(value)
    })
  })

  describe('#resource', () => {
    it('sets resource', () => {
      const inst = createInstance()
      const value = new StaticResource()
      inst.resource = value
      expect(inst.resource).to.equal(value)
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

  describe('#altText', () => {
    it('sets altText', () => {
      const inst = createInstance()
      const value = 'This is alt text'
      inst.altText = value
      expect(inst.altText).to.equal(value)
    })
  })

  describe('#clickThrough', () => {
    it('sets clickThrough', () => {
      const inst = createInstance()
      const value = 'https://example.com/clickthrough'
      inst.clickThrough = value
      expect(inst.clickThrough).to.equal(value)
    })
  })
})
