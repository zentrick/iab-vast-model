import { InLine } from '../../../src/ad/in-line'
import { Pricing } from '../../../src/core/pricing'
import testBase from './_base'

describe('InLine', () => {
  const createInstance = () => {
    const inst = new InLine()
    return inst
  }

  testBase(createInstance)

  describe('#adTitle', () => {
    it('sets adTitle', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.adTitle = value
      expect(inst.adTitle).to.equal(value)
    })
  })

  describe('#description', () => {
    it('sets description', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.description = value
      expect(inst.description).to.equal(value)
    })
  })

  describe('#advertiser', () => {
    it('sets advertiser', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.advertiser = value
      expect(inst.advertiser).to.equal(value)
    })
  })

  describe('#survey', () => {
    it('sets survey', () => {
      const inst = createInstance()
      const value = 'https://example.com/survey'
      inst.survey = value
      expect(inst.survey).to.equal(value)
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

  describe('#$type', () => {
    it('is InLine', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('InLine')
    })
  })
})
