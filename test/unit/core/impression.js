import {Impression} from '../../../src/core/impression'

describe('Impression', () => {
  const createInstance = () => {
    const inst = new Impression()
    return inst
  }

  describe('#id', () => {
    it('sets id', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.id = value
      expect(inst.id).to.equal(value)
    })
  })

  describe('#uri', () => {
    it('sets uri', () => {
      const inst = createInstance()
      const value = 'https://example.com/impression'
      inst.uri = value
      expect(inst.uri).to.equal(value)
    })
  })

  describe('#$type', () => {
    it('is Impression', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('Impression')
    })
  })
})
