export default (createInstance) => {
  describe('#uri', () => {
    it('sets uri', () => {
      const inst = createInstance()
      const value = 'https://example.com/resource'
      inst.uri = value
      expect(inst.uri).to.equal(value)
    })
  })
}
