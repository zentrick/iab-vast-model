import {NonLinear} from '../../../src/core/non-linear'
import {StaticResource} from '../../../src/resource/static'

describe('NonLinear', () => {
  const createInstance = () => {
    const inst = new NonLinear()
    return inst
  }

  describe('#clickTrackings', () => {
    it('gets clickTrackings', () => {
      const inst = createInstance()
      expect(inst.clickTrackings).to.be.an.instanceof(Array)
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
      const value = 640
      inst.width = value
      expect(inst.width).to.equal(value)
    })
  })

  describe('#height', () => {
    it('sets height', () => {
      const inst = createInstance()
      const value = 480
      inst.height = value
      expect(inst.height).to.equal(value)
    })
  })

  describe('#expandedWidth', () => {
    it('sets expandedWidth', () => {
      const inst = createInstance()
      const value = 1024
      inst.expandedWidth = value
      expect(inst.expandedWidth).to.equal(value)
    })
  })

  describe('#expandedHeight', () => {
    it('sets expandedHeight', () => {
      const inst = createInstance()
      const value = 768
      inst.expandedHeight = value
      expect(inst.expandedHeight).to.equal(value)
    })
  })

  describe('#scalable', () => {
    it('sets scalable', () => {
      const inst = createInstance()
      const value = true
      inst.scalable = value
      expect(inst.scalable).to.equal(value)
    })
  })

  describe('#maintainAspectRatio', () => {
    it('sets maintainAspectRatio', () => {
      const inst = createInstance()
      const value = true
      inst.maintainAspectRatio = value
      expect(inst.maintainAspectRatio).to.equal(value)
    })
  })

  describe('#minSuggestedDuration', () => {
    it('sets minSuggestedDuration', () => {
      const inst = createInstance()
      const value = 15.5
      inst.minSuggestedDuration = value
      expect(inst.minSuggestedDuration).to.equal(value)
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

  describe('#resource', () => {
    it('sets resource', () => {
      const inst = createInstance()
      const value = new StaticResource()
      inst.resource = value
      expect(inst.resource).to.equal(value)
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

  describe('#adParameters', () => {
    it('sets adParameters', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.adParameters = value
      expect(inst.adParameters).to.equal(value)
    })
  })
})
