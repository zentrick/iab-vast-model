import {HTMLResource} from '../../../src/resource/html'
import testBase from './_base'

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
