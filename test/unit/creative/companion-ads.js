import { CompanionAds } from '../../../src/creative/companion-ads'

describe('CompanionAds', () => {
  const createInstance = () => {
    const inst = new CompanionAds()
    return inst
  }

  describe('#required', () => {
    it('sets required', () => {
      const inst = createInstance()
      const value = true
      inst.required = value
      expect(inst.required).to.equal(value)
    })
  })

  describe('#companions', () => {
    it('gets companions', () => {
      const inst = createInstance()
      expect(inst.companions).to.be.an.instanceof(Array)
    })
  })

  describe('#xmlElement', () => {
    it('sets xmlElement', () => {
      const inst = createInstance()
      const value = {}
      inst.xmlElement = value
      expect(inst.xmlElement).to.equal(value)
    })
  })

  describe('#$type', () => {
    it('is CompanionAds', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('CompanionAds')
    })
  })
})
