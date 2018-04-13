import { AbsoluteTimeOffset } from '../../../src/time-offset/absolute'
import testBase from './_abstract'

describe('AbsoluteTimeOffset', () => {
  const createInstance = () => {
    const inst = new AbsoluteTimeOffset()
    return inst
  }

  testBase(createInstance)

  describe('#$type', () => {
    it('is AbsoluteTimeOffset', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('AbsoluteTimeOffset')
    })
  })
})
