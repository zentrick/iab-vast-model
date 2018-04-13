import { AdSystem } from '../../../src/core/ad-system'

describe('AdSystem', () => {
  const createInstance = () => {
    const inst = new AdSystem()
    return inst
  }

  describe('#authority', () => {
    it('sets authority', () => {
      const inst = createInstance()
      const value = 'https://www.dummy.com/'
      inst.authority = value
      expect(inst.authority).to.equal(value)
    })
  })

  describe('#code', () => {
    it('sets code', () => {
      const inst = createInstance()
      const value = 'category'
      inst.code = value
      expect(inst.code).to.equal(value)
    })
  })
})
