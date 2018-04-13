import { ViewableImpression } from '../../../src/core/viewable-impression'

describe('ViewableImpression', () => {
  const createInstance = () => {
    const inst = new ViewableImpression()
    return inst
  }

  describe('#id', () => {
    it('sets id', () => {
      const inst = createInstance()
      const value = 'server-1'
      inst.id = value
      expect(inst.id).to.equal(value)
    })
  })

  describe('#viewables', () => {
    it('gets viewables', () => {
      const inst = createInstance()
      expect(inst.viewables).to.be.an.instanceof(Array)
    })
  })

  describe('#notViewables', () => {
    it('gets notViewables', () => {
      const inst = createInstance()
      expect(inst.notViewables).to.be.an.instanceof(Array)
    })
  })

  describe('#viewUndetermineds', () => {
    it('gets viewUndetermineds', () => {
      const inst = createInstance()
      expect(inst.viewUndetermineds).to.be.an.instanceof(Array)
    })
  })

  describe('#$type', () => {
    it('is ViewableImpression', () => {
      const inst = createInstance()
      expect(inst.$type).to.equal('ViewableImpression')
    })
  })
})
