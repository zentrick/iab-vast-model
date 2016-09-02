import { SortedListItem } from '../../../src/util/sorted-list-item'

describe('SortedListItem', () => {
  const createInstance = () => {
    const inst = new SortedListItem()
    return inst
  }

  describe('#sequence', () => {
    it('sets sequence', () => {
      const inst = createInstance()
      const value = 123
      inst.sequence = value
      expect(inst.sequence).to.equal(value)
    })
  })
})
