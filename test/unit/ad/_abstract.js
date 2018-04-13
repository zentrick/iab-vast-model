import { SortedList } from '../../../src/util/sorted-list'
import { Pricing } from '../../../src/core/pricing'
import { AdSystem } from '../../../src/core/ad-system'
import { ViewableImpression } from '../../../src/core/viewable-impression'
import testBase from '../util/sorted-list-item'

export default (createInstance) => {
  testBase(createInstance)

  describe('#id', () => {
    it('sets id', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.id = value
      expect(inst.id).to.equal(value)
    })
  })

  describe('#conditionalAd', () => {
    it('sets conditionalAd', () => {
      const inst = createInstance()
      const value = true
      inst.conditionalAd = value
      expect(inst.conditionalAd).to.equal(value)
    })
  })

  describe('#adSystem', () => {
    it('sets adSystem', () => {
      const inst = createInstance()
      const value = new AdSystem()
      inst.adSystem = value
      expect(inst.adSystem).to.equal(value)
    })
  })

  describe('#impressions', () => {
    it('gets impressions', () => {
      const inst = createInstance()
      expect(inst.impressions).to.be.an.instanceof(Array)
    })
  })

  describe('#pricing', () => {
    it('sets pricing', () => {
      const inst = createInstance()
      const value = new Pricing()
      inst.pricing = value
      expect(inst.pricing).to.equal(value)
    })
  })

  describe('#errors', () => {
    it('sets multiple errors', () => {
      const inst = createInstance()
      const value1 = 'https://example.com/error'
      const value2 = 'https://example.com/error2'
      inst.errors.push(value1)
      inst.errors.push(value2)
      expect(inst.errors[0]).to.equal(value1)
      expect(inst.errors[1]).to.equal(value2)
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

  describe('#verifications', () => {
    it('gets verifications', () => {
      const inst = createInstance()
      expect(inst.verifications).to.be.an.instanceof(Array)
    })
  })

  describe('#extensions', () => {
    it('gets extensions', () => {
      const inst = createInstance()
      expect(inst.extensions).to.be.an.instanceof(Array)
    })
  })

  describe('#creatives', () => {
    it('gets creatives', () => {
      const inst = createInstance()
      expect(inst.creatives).to.be.an.instanceof(SortedList)
    })
  })
}
