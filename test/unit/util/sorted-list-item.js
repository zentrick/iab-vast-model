export default (createInstance) => {
  describe('#sequence', () => {
    it('sets sequence', () => {
      const inst = createInstance()
      const value = 123
      inst.sequence = value
      expect(inst.sequence).to.equal(value)
    })
  })
}
