// @flow

import { AbstractExtension } from '../../../src/extension/abstract'

type CreateInstance = () => AbstractExtension

export default (createInstance: CreateInstance) => {
  describe('#type', () => {
    it('sets type', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.type = value
      expect(inst.type).to.equal(value)
    })
  })

  describe('#content', () => {
    it('sets content', () => {
      const inst = createInstance()
      const value = '{}'
      inst.content = value
      expect(inst.content).to.equal(value)
    })
  })
}

describe('AbstractExtension', () => {
  describe('#$type', () => {
    it('throws an Error', () => {
      const inst = new AbstractExtension()
      expect(() => inst.$type).to.throw(Error)
    })
  })
})
