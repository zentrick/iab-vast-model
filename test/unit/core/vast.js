// @flow

import { VAST } from '../../../src/core/vast'
import { Wrapper } from '../../../src/ad/wrapper'
import { SortedList } from '../../../src/util/sorted-list'

describe('VAST', () => {
  const createInstance = () => {
    const inst = new VAST()
    return inst
  }

  describe('#errors', () => {
    it('gets errors', () => {
      const inst = createInstance()
      expect(inst.errors).to.be.an.instanceof(Array)
    })
  })

  describe('#version', () => {
    it('sets version', () => {
      const inst = createInstance()
      const value = '123'
      inst.version = value
      expect(inst.version).to.equal(value)
    })
  })

  describe('#parent', () => {
    it('sets parent', () => {
      const inst = createInstance()
      const value = new Wrapper()
      inst.parent = value
      expect(inst.parent).to.equal(value)
    })
  })

  describe('#depth', () => {
    it('returns the correct depth', () => {
      const root = createInstance()

      const wrapper1 = new Wrapper()
      root.adBuffet.add(wrapper1)
      wrapper1.parent = root
      const level1 = createInstance()
      level1.parent = wrapper1

      const wrapper2 = new Wrapper()
      level1.adBuffet.add(wrapper2)
      wrapper2.parent = level1
      const level2 = createInstance()
      level2.parent = wrapper2

      expect(root.depth).to.equal(0)
      expect(level1.depth).to.equal(1)
      expect(level2.depth).to.equal(2)
    })
  })

  describe('#adPod', () => {
    it('gets adPod', () => {
      const inst = createInstance()
      expect(inst.adPod).to.be.an.instanceof(SortedList)
    })
  })

  describe('#adBuffet', () => {
    it('gets adBuffet', () => {
      const inst = createInstance()
      expect(inst.adBuffet).to.be.an.instanceof(SortedList)
    })
  })

  describe('#ads', () => {
    it('gets the ads in correct order', () => {
      const inst = createInstance()

      const adWithinAdPod = new Wrapper()
      inst.adPod.add(adWithinAdPod)
      adWithinAdPod.parent = inst

      const adWithinAdBuffet = new Wrapper()
      inst.adBuffet.add(adWithinAdBuffet)
      adWithinAdBuffet.parent = inst

      expect(inst.ads).to.be.an.instanceof(Array)
      expect(inst.ads.length).to.equal(2)
      expect(inst.ads[0]).to.equal(adWithinAdPod)
      expect(inst.ads[1]).to.equal(adWithinAdBuffet)
    })
  })

  describe('#followAdditionalWrappers()', () => {
    it('should return true when it has no Wrapper parent', () => {
      const inst = createInstance()
      expect(inst.followAdditionalWrappers()).to.be.true()
    })

    it('should return true when it has a Wrapper parent without followAdditionalWrappers explictly being set', () => {
      const inst = createInstance()
      const wrapper = new Wrapper()
      inst.parent = wrapper
      expect(inst.followAdditionalWrappers()).to.be.true()
    })

    it('should return true when it has a Wrapper parent with followAdditionalWrappers explictly being set to true', () => {
      const inst = createInstance()
      const wrapper = new Wrapper()
      wrapper.followAdditionalWrappers = true
      inst.parent = wrapper
      expect(inst.followAdditionalWrappers()).to.be.true()
    })

    it('should return false when it has a Wrapper parent with followAdditionalWrappers explictly being set to false', () => {
      const inst = createInstance()
      const wrapper = new Wrapper()
      wrapper.followAdditionalWrappers = false
      inst.parent = wrapper
      expect(inst.followAdditionalWrappers()).to.be.false()
    })
  })

  describe('#$type', () => {
    it('is VAST', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('VAST')
    })
  })
})
