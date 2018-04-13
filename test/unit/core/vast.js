import { VAST } from '../../../src/core/vast'
import testBase from '../util/ad-buffet'

describe('VAST', () => {
  const createInstance = () => {
    const inst = new VAST()
    return inst
  }

  testBase(createInstance)

  describe('#uri', () => {
    it('sets uri', () => {
      const inst = createInstance()
      const value = 'http://example.com/vast.xml'
      inst.uri = value
      expect(inst.uri).to.equal(value)
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

  describe('#errors', () => {
    it('gets errors', () => {
      const inst = createInstance()
      expect(inst.errors).to.be.an.instanceof(Array)
    })
  })

  describe('#$type', () => {
    it('is VAST', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('VAST')
    })
  })
})
