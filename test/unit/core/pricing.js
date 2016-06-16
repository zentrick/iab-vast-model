import {Pricing} from '../../../src/core/pricing'

describe('Pricing', () => {
  const createInstance = () => {
    const inst = new Pricing()
    return inst
  }

  describe('#model', () => {
    it('sets model', () => {
      const inst = createInstance()
      const value = 'CPM'
      inst.model = value
      expect(inst.model).to.equal(value)
    })
  })

  describe('#currency', () => {
    it('sets currency', () => {
      const inst = createInstance()
      const value = 'USD'
      inst.currency = value
      expect(inst.currency).to.equal(value)
    })
  })

  describe('#value', () => {
    it('sets value', () => {
      const inst = createInstance()
      const value = 0.05
      inst.value = value
      expect(inst.value).to.equal(value)
    })
  })
})
