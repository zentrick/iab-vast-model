import { InLine } from '../../../src/ad/in-line'
import testBase from './_abstract'

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

  describe('#categories', () => {
    it('gets categories', () => {
      const inst = createInstance()
      expect(inst.categories).to.be.an.instanceof(Array)
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

  describe('#surveys', () => {
    it('sets surveys', () => {
      const inst = createInstance()
      expect(inst.surveys).to.be.an.instanceof(Array)
    })
  })

  describe('#$type', () => {
    it('is InLine', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('InLine')
    })
  })
})
