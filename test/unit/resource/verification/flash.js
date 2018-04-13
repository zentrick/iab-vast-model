import { FlashResource } from '../../../../src/resource/verification/flash'
import testBase from './_abstract'

describe('FlashResource', () => {
  const createInstance = () => {
    const inst = new FlashResource()
    return inst
  }

  testBase(createInstance)

  describe('#$type', () => {
    it('is FlashResource', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('FlashResource')
    })
  })
})
