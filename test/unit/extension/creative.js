import { CreativeExtension } from '../../../src/extension/creative'
import testBase from './_abstract'

describe('CreativeExtension', () => {
  const createInstance = () => {
    const inst = new CreativeExtension()
    return inst
  }

  testBase(createInstance)

  describe('#$type', () => {
    it('is CreativeExtension', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('CreativeExtension')
    })
  })
})
