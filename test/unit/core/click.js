import { Click } from '../../../src/core/click'

describe('Click', () => {
  const createInstance = () => {
    const inst = new Click()
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
      const value = 'https://example.com/click'
      inst.uri = value
      expect(inst.uri).to.equal(value)
    })
  })

  describe('#$type', () => {
    it('is Click', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('Click')
    })
  })
})
