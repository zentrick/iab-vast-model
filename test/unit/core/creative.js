import { Creative } from '../../../src/core/creative'
import { UniversalAdId } from '../../../src/core/universal-ad-id'
import { Linear } from '../../../src/creative/linear'
import { CompanionAds } from '../../../src/creative/companion-ads'
import { NonLinearAds } from '../../../src/creative/non-linear-ads'
import testBase from '../util/sorted-list-item'

describe('Creative', () => {
  const createInstance = () => {
    const inst = new Creative()
    return inst
  }

  testBase(createInstance)

  describe('#id', () => {
    it('sets id', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.id = value
      expect(inst.id).to.equal(value)
    })
  })

  describe('#adID', () => {
    it('sets adID', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.adID = value
      expect(inst.adID).to.equal(value)
    })
  })

  describe('#apiFramework', () => {
    it('sets apiFramework', () => {
      const inst = createInstance()
      const value = 'VPAID'
      inst.apiFramework = value
      expect(inst.apiFramework).to.equal(value)
    })
  })

  describe('#universalAdId', () => {
    it('sets universalAdId', () => {
      const inst = createInstance()
      const value = new UniversalAdId()
      inst.universalAdId = value
      expect(inst.universalAdId).to.equal(value)
    })
  })

  describe('#extensions', () => {
    it('gets extensions', () => {
      const inst = createInstance()
      expect(inst.extensions).to.be.an.instanceof(Array)
    })
  })

  describe('#linear', () => {
    it('sets linear', () => {
      const inst = createInstance()
      const value = new Linear()
      inst.linear = value
      expect(inst.linear).to.equal(value)
    })
  })

  describe('#companionAds', () => {
    it('sets companionAds', () => {
      const inst = createInstance()
      const value = new CompanionAds()
      inst.companionAds = value
      expect(inst.companionAds).to.equal(value)
    })
  })

  describe('#nonLinearAds', () => {
    it('sets nonLinearAds', () => {
      const inst = createInstance()
      const value = new NonLinearAds()
      inst.nonLinearAds = value
      expect(inst.nonLinearAds).to.equal(value)
    })
  })

  describe('#$type', () => {
    it('is Creative', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('Creative')
    })
  })
})
