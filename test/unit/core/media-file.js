import { MediaFile } from '../../../src/core/media-file'

describe('MediaFile', () => {
  const createInstance = () => {
    const inst = new MediaFile()
    return inst
  }

  describe('#id', () => {
    it('sets id', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.id = value
      expect(inst.id).to.equal(value)
    })
  })

  describe('#delivery', () => {
    it('sets delivery', () => {
      const inst = createInstance()
      const value = 'progressive'
      inst.delivery = value
      expect(inst.delivery).to.equal(value)
    })
  })

  describe('#type', () => {
    it('sets type', () => {
      const inst = createInstance()
      const value = 'video/mp4'
      inst.type = value
      expect(inst.type).to.equal(value)
    })
  })

  describe('#bitrate', () => {
    it('sets bitrate', () => {
      const inst = createInstance()
      const value = 128
      inst.bitrate = value
      expect(inst.bitrate).to.equal(value)
    })
  })

  describe('#minBitrate', () => {
    it('sets minBitrate', () => {
      const inst = createInstance()
      const value = 96
      inst.minBitrate = value
      expect(inst.minBitrate).to.equal(value)
    })
  })

  describe('#maxBitrate', () => {
    it('sets maxBitrate', () => {
      const inst = createInstance()
      const value = 1024
      inst.maxBitrate = value
      expect(inst.maxBitrate).to.equal(value)
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

  describe('#scalable', () => {
    it('sets scalable', () => {
      const inst = createInstance()
      const value = true
      inst.scalable = value
      expect(inst.scalable).to.equal(value)
    })
  })

  describe('#maintainAspectRatio', () => {
    it('sets maintainAspectRatio', () => {
      const inst = createInstance()
      const value = true
      inst.maintainAspectRatio = value
      expect(inst.maintainAspectRatio).to.equal(value)
    })
  })

  describe('#codec', () => {
    it('sets codec', () => {
      const inst = createInstance()
      const value = 'avc1.77.12'
      inst.codec = value
      expect(inst.codec).to.equal(value)
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

  describe('#uri', () => {
    it('sets uri', () => {
      const inst = createInstance()
      const value = 'https://example.com/media.mp4'
      inst.uri = value
      expect(inst.uri).to.equal(value)
    })
  })

  describe('#$type', () => {
    it('is MediaFile', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('MediaFile')
    })
  })
})
