import { IconClicks } from '../../../src/clicks/icon'
import testBase from './default'

describe('IconClicks', () => {
  const createInstance = () => {
    const inst = new IconClicks()
    return inst
  }

  testBase(createInstance)

  describe('#$type', () => {
    it('is IconClicks', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('IconClicks')
    })
  })
})
