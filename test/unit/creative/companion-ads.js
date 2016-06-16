import {CompanionAds} from '../../../src/creative/companion-ads'
import testBase from './_base'

describe('CompanionAds', () => {
  const createInstance = () => {
    const inst = new CompanionAds()
    return inst
  }

  testBase(createInstance)

  describe('#companions', () => {
    it('gets companions', () => {
      const inst = createInstance()
      expect(inst.companions).to.be.an.instanceof(Array)
    })
  })

  describe('#required', () => {
    it('sets required', () => {
      const inst = createInstance()
      const value = true
      inst.required = value
      expect(inst.required).to.equal(value)
    })
  })
})
