import { JavaScriptResource } from '../../../../src/resource/verification/javascript'
import testBase from '../_abstract'

describe('JavaScriptResource', () => {
  const createInstance = () => {
    const inst = new JavaScriptResource()
    return inst
  }

  testBase(createInstance)

  describe('#$type', () => {
    it('is JavaScriptResource', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('JavaScriptResource')
    })
  })
})
