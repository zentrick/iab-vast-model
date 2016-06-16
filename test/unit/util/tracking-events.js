import {TrackingEvents} from '../../../src/util/tracking-events'

describe('TrackingEvents', () => {
  const createInstance = () => {
    const inst = new TrackingEvents()
    return inst
  }

  describe('#add', () => {
    it('adds a binding', () => {
      const inst = createInstance()
      const type = 'firstQuartile'
      const uri = 'https://example.com/firstQuartile'
      inst.add(type, uri)
      expect(inst.get(type)).to.contain(uri)
    })

    it('adds multiple bindings for the same type', () => {
      const inst = createInstance()
      const type = 'firstQuartile'
      const uri1 = 'https://example.com/firstQuartile1'
      const uri2 = 'https://example.com/firstQuartile2'
      inst.add(type, uri1)
      inst.add(type, uri2)
      expect(inst.get(type)).to.contain(uri1)
      expect(inst.get(type)).to.contain(uri2)
    })
  })

  describe('#get', () => {
    it('returns an array', () => {
      const inst = createInstance()
      const type = 'firstQuartile'
      expect(inst.get(type)).to.be.an.instanceof(Array)
    })
  })

  describe('#types', () => {
    it('returns an array', () => {
      const inst = createInstance()
      expect(inst.types).to.be.an.instanceof(Array)
    })

    it('adds a type', () => {
      const inst = createInstance()
      const type = 'firstQuartile'
      const uri = 'https://example.com/firstQuartile'
      inst.add(type, uri)
      expect(inst.types).to.contain(type)
    })
  })
})
