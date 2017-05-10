// @flow

import { Click } from '../../../src/util/click'
import { AbstractClicks } from '../../../src/clicks/abstract'

type CreateInstance = () => AbstractClicks

export default (createInstance: CreateInstance) => {
  describe('#clickTrackings', () => {
    it('gets clickTrackings', () => {
      const inst = createInstance()
      expect(inst.clickTrackings).to.be.an.instanceof(Array)
    })
  })

  describe('#clickThrough', () => {
    it('sets clickThrough', () => {
      const inst = createInstance()
      const value = new Click()
      inst.clickThrough = value
      expect(inst.clickThrough).to.equal(value)
    })
  })
}

describe('AbstractClicks', () => {
  describe('#$type', () => {
    it('throws an Error', () => {
      const inst = new AbstractClicks()
      expect(() => inst.$type).to.throw(Error)
    })
  })
})
