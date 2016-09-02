import { NonLinearAds } from '../../../src/creative/non-linear-ads'
import { TrackingEvents } from '../../../src/tracking/events'
import testBase from './_base'

describe('NonLinearAds', () => {
  const createInstance = () => {
    const inst = new NonLinearAds()
    return inst
  }

  testBase(createInstance)

  describe('#nonLinears', () => {
    it('gets nonLinears', () => {
      const inst = createInstance()
      expect(inst.nonLinears).to.be.an.instanceof(Array)
    })
  })

  describe('#trackingEvents', () => {
    it('gets trackingEvents', () => {
      const inst = createInstance()
      expect(inst.trackingEvents).to.be.an.instanceof(TrackingEvents)
    })
  })

  describe('#$type', () => {
    it('is NonLinearAds', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('NonLinearAds')
    })
  })
})
