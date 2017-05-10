// @flow

import { TimeOffset } from '../../../src/time-offset/base'

type CreateInstance = () => TimeOffset

export default (createInstance: CreateInstance) => {
  describe('#value', () => {
    it('sets value', () => {
      const inst = createInstance()
      const value = 123.45
      inst.value = value
      expect(inst.value).to.equal(value)
    })
  })
}

describe('TimeOffset', () => {
  describe('#$type', () => {
    it('throws an Error', () => {
      const inst = new TimeOffset()
      expect(() => inst.$type).to.throw(Error)
    })
  })
})
