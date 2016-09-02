import { AdPod } from '../../../src/core/ad-pod'
import { SortedList } from '../../../src/util/sorted-list'

describe('AdPod', () => {
  const createInstance = () => {
    const inst = new AdPod()
    return inst
  }

  describe('#ads', () => {
    it('gets ads', () => {
      const inst = createInstance()
      expect(inst.ads).to.be.an.instanceof(SortedList)
    })
  })

  describe('#$type', () => {
    it('is AdPod', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('AdPod')
    })
  })
})
