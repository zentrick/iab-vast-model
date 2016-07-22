import {Wrapper} from '../../../src/ad/wrapper'
import testBase from './_base'

describe('Wrapper', () => {
  const createInstance = () => {
    const inst = new Wrapper()
    return inst
  }

  testBase(createInstance)

  describe('#vastAdTagURI', () => {
    it('sets vastAdTagURI', () => {
      const inst = createInstance()
      const value = 'https://example.com/tag'
      inst.vastAdTagURI = value
      expect(inst.vastAdTagURI).to.equal(value)
    })
  })

  describe('#followAdditionalWrappers', () => {
    it('sets followAdditionalWrappers', () => {
      const inst = createInstance()
      const value = true
      inst.followAdditionalWrappers = value
      expect(inst.followAdditionalWrappers).to.equal(value)
    })
  })

  describe('#allowMultipleAds', () => {
    it('sets allowMultipleAds', () => {
      const inst = createInstance()
      const value = true
      inst.allowMultipleAds = value
      expect(inst.allowMultipleAds).to.equal(value)
    })
  })

  describe('#fallbackOnNoAd', () => {
    it('sets fallbackOnNoAd', () => {
      const inst = createInstance()
      const value = true
      inst.fallbackOnNoAd = value
      expect(inst.fallbackOnNoAd).to.equal(value)
    })
  })

  describe('#$type', () => {
    it('is Wrapper', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('Wrapper')
    })
  })
})
