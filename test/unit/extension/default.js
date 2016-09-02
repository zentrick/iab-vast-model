import { Extension } from '../../../src/extension/default'
import testBase from './_base'

describe('Extension', () => {
  const createInstance = () => {
    const inst = new Extension()
    return inst
  }

  testBase(createInstance)

  describe('#$type', () => {
    it('is Extension', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('Extension')
    })
  })
})
