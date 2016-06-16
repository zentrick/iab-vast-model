export default (createInstance) => {
  describe('#content', () => {
    it('sets content', () => {
      const inst = createInstance()
      const value = 'https://example.com/resource'
      inst.content = value
      expect(inst.content).to.equal(value)
    })
  })
}
