import { Base } from '../../src/base'

describe('Base', () => {
  describe('#$type', () => {
    it('throws an Error', () => {
      const inst = new Base()
      expect(() => inst.$type).to.throw(Error)
    })
  })
})
