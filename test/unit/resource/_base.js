// @flow

import { Resource } from '../../../src/resource/base'

type CreateInstance = () => Resource

export default (createInstance: CreateInstance) => {
  describe('#content', () => {
    it('sets content', () => {
      const inst = createInstance()
      const value = 'https://example.com/resource'
      inst.content = value
      expect(inst.content).to.equal(value)
    })
  })
}

describe('Resource', () => {
  describe('#$type', () => {
    it('throws an Error', () => {
      const inst = new Resource()
      expect(() => inst.$type).to.throw(Error)
    })
  })
})
