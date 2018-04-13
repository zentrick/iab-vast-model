import { TrackingEvent } from '../../../src/core/tracking-event'
import { TrackingEvents } from '../../../src/core/tracking-events'

describe('TrackingEvents', () => {
  const createInstance = () => {
    const inst = new TrackingEvents()
    return inst
  }

  describe('#types', () => {
    it('returns an array', () => {
      const inst = createInstance()
      expect(inst.types).to.be.an.instanceof(Array)
    })

    it('adds a type', () => {
      const inst = createInstance()
      const type = 'firstQuartile'
      const conf = new TrackingEvent()
      conf.uri = 'https://example.com/firstQuartile'
      inst.add(type, conf)
      expect(inst.types).to.contain(type)
    })
  })

  describe('#get', () => {
    it('returns an array', () => {
      const inst = createInstance()
      const type = 'firstQuartile'
      expect(inst.get(type)).to.be.an.instanceof(Array)
    })
  })

  describe('#add', () => {
    it('adds a binding', () => {
      const inst = createInstance()
      const type = 'firstQuartile'
      const conf = new TrackingEvent()
      conf.uri = 'https://example.com/firstQuartile'
      inst.add(type, conf)
      expect(inst.get(type)).to.contain(conf)
    })

    it('adds multiple bindings for the same type', () => {
      const inst = createInstance()
      const type = 'firstQuartile'
      const conf1 = new TrackingEvent()
      conf1.uri = 'https://example.com/firstQuartile1'
      const conf2 = new TrackingEvent()
      conf2.uri = 'https://example.com/firstQuartile2'
      inst.add(type, conf1)
      inst.add(type, conf2)
      expect(inst.get(type)).to.contain(conf1)
      expect(inst.get(type)).to.contain(conf2)
    })
  })

  describe('#$type', () => {
    it('is TrackingEvents', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('TrackingEvents')
    })
  })
})
