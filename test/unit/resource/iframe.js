import {IFrameResource} from '../../../src/resource/iframe'
import testBase from './_base'

describe('IFrameResource', () => {
  const createInstance = () => {
    const inst = new IFrameResource()
    return inst
  }

  testBase(createInstance)

  describe('#$type', () => {
    it('is IFrameResource', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('IFrameResource')
    })
  })
})
