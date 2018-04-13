import { Verification } from '../../../src/core/verification'
import { ViewableImpression } from '../../../src/core/viewable-impression'

describe('Verification', () => {
  const createInstance = () => {
    const inst = new Verification()
    return inst
  }

  describe('#vendor', () => {
    it('sets vendor', () => {
      const inst = createInstance()
      const value = 'http://www.verification-provider.com'
      inst.vendor = value
      expect(inst.vendor).to.equal(value)
    })
  })

  describe('#javaScriptResources', () => {
    it('gets javaScriptResources', () => {
      const inst = createInstance()
      expect(inst.javaScriptResources).to.be.an.instanceof(Array)
    })
  })

  describe('#flashResources', () => {
    it('gets flashResources', () => {
      const inst = createInstance()
      expect(inst.flashResources).to.be.an.instanceof(Array)
    })
  })

  describe('#viewableImpression', () => {
    it('sets viewableImpression', () => {
      const inst = createInstance()
      const value = new ViewableImpression()
      inst.viewableImpression = value
      expect(inst.viewableImpression).to.equal(value)
    })
  })

  describe('#$type', () => {
    it('is Verification', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('Verification')
    })
  })
})
