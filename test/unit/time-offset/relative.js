import { RelativeTimeOffset } from '../../../src/time-offset/relative'
import testBase from './_base'

describe('RelativeTimeOffset', () => {
  const createInstance = () => {
    const inst = new RelativeTimeOffset()
    return inst
  }

  testBase(createInstance)

  describe('#$type', () => {
    it('is RelativeTimeOffset', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('RelativeTimeOffset')
    })
  })
})
