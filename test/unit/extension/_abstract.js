export default (createInstance) => {
  describe('#type', () => {
    it('sets type', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.type = value
      expect(inst.type).to.equal(value)
    })
  })

  describe('#xmlElement', () => {
    it('sets xmlElement', () => {
      const inst = createInstance()
      const value = {}
      inst.xmlElement = value
      expect(inst.xmlElement).to.equal(value)
    })
  })
}
