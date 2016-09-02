import { SortedList } from '../../../src/util/sorted-list'

export default (createInstance) => {
  describe('#creatives', () => {
    it('gets creatives', () => {
      const inst = createInstance()
      expect(inst.creatives).to.be.an.instanceof(SortedList)
    })
  })

  describe('#impressions', () => {
    it('gets impressions', () => {
      const inst = createInstance()
      expect(inst.impressions).to.be.an.instanceof(Array)
    })
  })

  describe('#extensions', () => {
    it('gets extensions', () => {
      const inst = createInstance()
      expect(inst.extensions).to.be.an.instanceof(Array)
    })
  })

  describe('#id', () => {
    it('sets id', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.id = value
      expect(inst.id).to.equal(value)
    })
  })

  describe('#adSystem', () => {
    it('sets adSystem', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.adSystem = value
      expect(inst.adSystem).to.equal(value)
    })
  })

  describe('#error', () => {
    it('sets error', () => {
      const inst = createInstance()
      const value = 'https://example.com/error'
      inst.error = value
      expect(inst.error).to.equal(value)
    })
  })
}
