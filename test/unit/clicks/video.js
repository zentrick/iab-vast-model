import {VideoClicks} from '../../../src/clicks/video'
import testBase from './_base'

describe('VideoClicks', () => {
  const createInstance = () => {
    const inst = new VideoClicks()
    return inst
  }

  testBase(createInstance)

  describe('#customClicks', () => {
    it('gets customClicks', () => {
      const inst = createInstance()
      expect(inst.customClicks).to.be.an.instanceof(Array)
    })
  })
})
