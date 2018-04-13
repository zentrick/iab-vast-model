import { Wrapper } from '../../../src/ad/wrapper'
import testBase from './_abstract'

describe('Wrapper', () => {
  const createInstance = () => {
    const inst = new Wrapper()
    return inst
  }

  testBase(createInstance)

  describe('#followAdditionalWrappers', () => {
    it('equals to true by default', () => {
      const inst = createInstance()
      expect(inst.followAdditionalWrappers).to.equal(true)
    })
    it('sets followAdditionalWrappers', () => {
      const inst = createInstance()
      const value = false
      inst.followAdditionalWrappers = value
      expect(inst.followAdditionalWrappers).to.equal(value)
    })
  })

  describe('#allowMultipleAds', () => {
    it('equals to false by default', () => {
      const inst = createInstance()
      expect(inst.allowMultipleAds).to.equal(false)
    })
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

  describe('#vastAdTagURI', () => {
    it('sets vastAdTagURI', () => {
      const inst = createInstance()
      const value = 'https://example.com/tag'
      inst.vastAdTagURI = value
      expect(inst.vastAdTagURI).to.equal(value)
    })
  })

  describe('#$type', () => {
    it('is Wrapper', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('Wrapper')
    })
  })
})
