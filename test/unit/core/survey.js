import { Survey } from '../../../src/core/survey'

describe('Survey', () => {
  const createInstance = () => {
    const inst = new Survey()
    return inst
  }

  describe('#type', () => {
    it('sets type', () => {
      const inst = createInstance()
      const value = 'text/javascript'
      inst.type = value
      expect(inst.type).to.equal(value)
    })
  })

  describe('#uri', () => {
    it('sets uri', () => {
      const inst = createInstance()
      const value = 'https://example.com/survey'
      inst.uri = value
      expect(inst.uri).to.equal(value)
    })
  })

  describe('#$type', () => {
    it('is Survey', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('Survey')
    })
  })
})
