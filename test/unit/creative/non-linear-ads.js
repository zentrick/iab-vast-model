import { NonLinearAds } from '../../../src/creative/non-linear-ads'
import { TrackingEvents } from '../../../src/core/tracking-events'

describe('NonLinearAds', () => {
  const createInstance = () => {
    const inst = new NonLinearAds()
    return inst
  }

  describe('#nonLinears', () => {
    it('gets nonLinears', () => {
      const inst = createInstance()
      expect(inst.nonLinears).to.be.an.instanceof(Array)
    })
  })

  describe('#trackingEvents', () => {
    it('sets trackingEvents', () => {
      const inst = createInstance()
      const value = new TrackingEvents()
      inst.trackingEvents = value
      expect(inst.trackingEvents).to.equal(value)
    })
  })

  describe('#$type', () => {
    it('is NonLinearAds', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('NonLinearAds')
    })
  })
})
