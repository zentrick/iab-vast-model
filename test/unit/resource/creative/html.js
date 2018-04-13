import { HTMLResource } from '../../../../src/resource/creative/html'
import testBase from '../_abstract'

describe('HTMLResource', () => {
  const createInstance = () => {
    const inst = new HTMLResource()
    return inst
  }

  testBase(createInstance)

  describe('#$type', () => {
    it('is HTMLResource', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('HTMLResource')
    })
  })
})
