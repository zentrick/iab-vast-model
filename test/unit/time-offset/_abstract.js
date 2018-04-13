export default (createInstance) => {
  describe('#value', () => {
    it('sets value', () => {
      const inst = createInstance()
      const value = 123.45
      inst.value = value
      expect(inst.value).to.equal(value)
    })
  })
}
