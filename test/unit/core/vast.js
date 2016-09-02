import { VAST } from '../../../src/core/vast'

describe('VAST', () => {
  const createInstance = () => {
    const inst = new VAST()
    return inst
  }

  describe('#errors', () => {
    it('gets errors', () => {
      const inst = createInstance()
      expect(inst.errors).to.be.an.instanceof(Array)
    })
  })

  describe('#version', () => {
    it('sets version', () => {
      const inst = createInstance()
      const value = 123
      inst.version = value
      expect(inst.version).to.equal(value)
    })
  })

  describe('#$type', () => {
    it('is VAST', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('VAST')
    })
  })
})
