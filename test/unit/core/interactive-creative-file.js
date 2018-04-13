import { InteractiveCreativeFile } from '../../../src/core/interactive-creative-file'

describe('InteractiveCreativeFile', () => {
  const createInstance = () => {
    const inst = new InteractiveCreativeFile()
    return inst
  }

  describe('#type', () => {
    it('sets type', () => {
      const inst = createInstance()
      const value = 'dummy'
      inst.type = value
      expect(inst.type).to.equal(value)
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
      const value = 'dummy'
      inst.uri = value
      expect(inst.uri).to.equal(value)
    })
  })

  describe('#$type', () => {
    it('is InteractiveCreativeFile', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('InteractiveCreativeFile')
    })
  })
})
