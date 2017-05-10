// @flow

import { Icon } from '../../../src/core/icon'
import { IconClicks } from '../../../src/clicks/icon'
import { StaticResource } from '../../../src/resource/static'

describe('Icon', () => {
  const createInstance = () => {
    const inst = new Icon()
    return inst
  }

  describe('#clicks', () => {
    it('gets clicks', () => {
      const inst = createInstance()
      expect(inst.clicks).to.be.an.instanceof(IconClicks)
    })
  })

  describe('#viewTrackings', () => {
    it('gets viewTrackings', () => {
      const inst = createInstance()
      expect(inst.viewTrackings).to.be.an.instanceof(Array)
    })
  })

  describe('#program', () => {
    it('sets program', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.program = value
      expect(inst.program).to.equal(value)
    })
  })

  describe('#width', () => {
    it('sets width', () => {
      const inst = createInstance()
      const value = 960
      inst.width = value
      expect(inst.width).to.equal(value)
    })
  })

  describe('#height', () => {
    it('sets height', () => {
      const inst = createInstance()
      const value = 540
      inst.height = value
      expect(inst.height).to.equal(value)
    })
  })

  describe('#xPosition', () => {
    it('sets xPosition', () => {
      const inst = createInstance()
      const value = 12
      inst.xPosition = value
      expect(inst.xPosition).to.equal(value)
    })
  })

  describe('#yPosition', () => {
    it('sets yPosition', () => {
      const inst = createInstance()
      const value = 34
      inst.yPosition = value
      expect(inst.yPosition).to.equal(value)
    })
  })

  describe('#duration', () => {
    it('sets duration', () => {
      const inst = createInstance()
      const value = 30
      inst.duration = value
      expect(inst.duration).to.equal(value)
    })
  })

  describe('#offset', () => {
    it('sets offset', () => {
      const inst = createInstance()
      const value = 15
      inst.offset = value
      expect(inst.offset).to.equal(value)
    })
  })

  describe('#apiFramework', () => {
    it('sets apiFramework', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.apiFramework = value
      expect(inst.apiFramework).to.equal(value)
    })
  })

  describe('#resource', () => {
    it('sets resource', () => {
      const inst = createInstance()
      const value = new StaticResource()
      inst.resource = value
      expect(inst.resource).to.equal(value)
    })
  })

  describe('#$type', () => {
    it('is Icon', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('Icon')
    })
  })
})
