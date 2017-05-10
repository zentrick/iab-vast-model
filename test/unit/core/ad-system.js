// @flow

import { AdSystem } from '../../../src/core/ad-system'

describe('AdSystem', () => {
  const createInstance = () => {
    const inst = new AdSystem()
    return inst
  }

  describe('#name', () => {
    it('sets name', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.name = value
      expect(inst.name).to.equal(value)
    })
  })

  describe('#version', () => {
    it('sets version', () => {
      const inst = createInstance()
      const value = '42'
      inst.version = value
      expect(inst.version).to.equal(value)
    })
  })

  describe('#$type', () => {
    it('is AdSystem', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('AdSystem')
    })
  })
})
