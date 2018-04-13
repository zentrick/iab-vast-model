import { UniversalAdId } from '../../../src/core/universal-ad-id'

describe('UniversalAdId', () => {
  const createInstance = () => {
    const inst = new UniversalAdId()
    return inst
  }

  describe('#idRegistry', () => {
    it('checks default value', () => {
      const inst = createInstance()
      expect(inst.idRegistry).to.equal('unknown')
    })

    it('sets idRegistry', () => {
      const inst = createInstance()
      const value = 'https://example.com/registry'
      inst.idRegistry = value
      expect(inst.idRegistry).to.equal(value)
    })
  })

  describe('#idValue', () => {
    it('checks default value', () => {
      const inst = createInstance()
      expect(inst.idValue).to.equal('unknown')
    })

    it('sets idValue', () => {
      const inst = createInstance()
      const value = 'creative-id'
      inst.idValue = value
      expect(inst.idValue).to.equal(value)
    })
  })

  describe('#creativeIdentifier', () => {
    it('sets creativeIdentifier', () => {
      const inst = createInstance()
      const value = 'creative-id'
      inst.creativeIdentifier = value
      expect(inst.creativeIdentifier).to.equal(value)
    })
  })

  describe('#$type', () => {
    it('is UniversalAdId', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('UniversalAdId')
    })
  })
})
