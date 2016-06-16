export default (createInstance) => {
  describe('#type', () => {
    it('sets type', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.type = value
      expect(inst.type).to.equal(value)
    })
  })

  describe('#content', () => {
    it('sets content', () => {
      const inst = createInstance()
      const value = {}
      inst.content = value
      expect(inst.content).to.equal(value)
    })
  })
}
