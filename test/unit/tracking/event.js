import {TrackingEvent} from '../../../src/tracking/event'
import {RelativeTimeOffset} from '../../../src/time-offset/relative'

describe('TrackingEvent', () => {
  const createInstance = () => {
    const inst = new TrackingEvent()
    return inst
  }

  describe('#uri', () => {
    it('sets uri', () => {
      const inst = createInstance()
      const value = 'https://example.com/firstQuartile'
      inst.uri = value
      expect(inst.uri).to.equal(value)
    })
  })

  describe('#offset', () => {
    it('sets offset', () => {
      const inst = createInstance()
      const value = new RelativeTimeOffset(50)
      inst.offset = value
      expect(inst.offset).to.equal(value)
    })
  })

  describe('#$type', () => {
    it('is TrackingEvent', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('TrackingEvent')
    })
  })
})
