export default (createInstance) => {
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

  describe('#sequence', () => {
    it('sets sequence', () => {
      const inst = createInstance()
      const value = 42
      inst.sequence = value
      expect(inst.sequence).to.equal(value)
    })
  })

  describe('#adID', () => {
    it('sets adID', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.adID = value
      expect(inst.adID).to.equal(value)
    })
  })

  describe('#apiFramework', () => {
    it('sets apiFramework', () => {
      const inst = createInstance()
      const value = 'VPAID'
      inst.apiFramework = value
      expect(inst.apiFramework).to.equal(value)
    })
  })
}
