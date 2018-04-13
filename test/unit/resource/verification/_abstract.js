import testBase from '../_abstract'

export default (createInstance) => {
  testBase(createInstance)

  describe('#apiFramework', () => {
    it('sets apiFramework', () => {
      const inst = createInstance()
      const value = 'API'
      inst.apiFramework = value
      expect(inst.apiFramework).to.equal(value)
    })
  })
}
