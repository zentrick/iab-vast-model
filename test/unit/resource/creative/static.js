import { StaticResource } from '../../../../src/resource/creative/static'
import testBase from '../_abstract'

describe('StaticResource', () => {
  const createInstance = () => {
    const inst = new StaticResource()
    return inst
  }

  testBase(createInstance)

  describe('#creativeType', () => {
    it('sets creativeType', () => {
      const inst = createInstance()
      const value = 'image/gif'
      inst.creativeType = value
      expect(inst.creativeType).to.equal(value)
    })
  })

  describe('#$type', () => {
    it('is StaticResource', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('StaticResource')
    })
  })
})
