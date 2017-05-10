// @flow

import { SortedList } from '../../../src/util/sorted-list'
import { SortedListItem } from '../../../src/util/sorted-list-item'

const createSortedListItem = sequence => {
  const item = new SortedListItem()
  item.sequence = sequence
  return item
}

describe('SortedList', () => {
  describe('#length', () => {
    it('is 0 by default', () => {
      const list = new SortedList()
      expect(list.length).to.equal(0)
    })

    it('increases on add', () => {
      const list = new SortedList()
      list.add(new SortedListItem())
      expect(list.length).to.equal(1)
      list.add(new SortedListItem())
      expect(list.length).to.equal(2)
    })
  })

  describe('#get()', () => {
    it('gets an item', () => {
      const list = new SortedList()
      const item = createSortedListItem(1)
      list.add(item)
      expect(list.get(0)).to.equal(item)
    })

    it('gets undefined outside contents', () => {
      const list = new SortedList()
      expect(list.get(0)).to.be.undefined
    })
  })

  describe('#add()', () => {
    it('adds an item', () => {
      const list = new SortedList()
      const item = createSortedListItem(1)
      list.add(item)
      expect(list.get(0)).to.equal(item)
    })

    it('sorts items by sequence', () => {
      const list = new SortedList()
      const item1 = createSortedListItem(1)
      const item2 = createSortedListItem(2)
      list.add(item2)
      list.add(item1)
      expect(list.get(0)).to.equal(item1)
      expect(list.get(1)).to.equal(item2)
    })

    it('sorts stably', () => {
      const list = new SortedList()
      const item1 = createSortedListItem(1)
      const item2 = createSortedListItem(1)
      const item3 = createSortedListItem(1)
      list.add(item1)
      list.add(item2)
      list.add(item3)
      expect(list.get(0)).to.equal(item1)
      expect(list.get(1)).to.equal(item2)
      expect(list.get(2)).to.equal(item3)
    })

    it('defaults to sequence 0', () => {
      const list = new SortedList()
      const item1 = createSortedListItem(1)
      const item0 = createSortedListItem()
      list.add(item1)
      list.add(item0)
      expect(list.get(0)).to.equal(item0)
      expect(list.get(1)).to.equal(item1)
    })
  })

  describe('#remove()', () => {
    it('removes an item', () => {
      const list = new SortedList()
      const item = createSortedListItem()
      list.add(item)
      list.remove(item)
      expect(list.length).to.equal(0)
    })

    it('removes every instance of an item', () => {
      const list = new SortedList()
      const item = createSortedListItem()
      list.add(item)
      list.add(item)
      list.add(item)
      list.remove(item)
      expect(list.length).to.equal(0)
    })

    it('does not modify contents for non-existent items', () => {
      const list = new SortedList()
      const item = createSortedListItem()
      list.remove(item)
      expect(list.length).to.equal(0)
    })
  })

  describe('#clear()', () => {
    it('clears a non-empty list', () => {
      const list = new SortedList()
      list.add(createSortedListItem())
      list.clear()
      expect(list.length).to.equal(0)
    })
  })

  describe('#[Symbol.iterator]()', () => {
    it('is iterable', () => {
      const list = new SortedList()
      const item1 = createSortedListItem(1)
      const item2 = createSortedListItem(2)
      list.add(item1)
      list.add(item2)
      // $FlowFixMe
      const iterator = list[Symbol.iterator]()
      expect(iterator.next()).to.eql({ value: item1, done: false })
      expect(iterator.next()).to.eql({ value: item2, done: false })
      expect(iterator.next()).to.eql({ value: undefined, done: true })
    })
  })

  describe('#toArray()', () => {
    const list = new SortedList()
    const item1 = createSortedListItem(1)
    const item2 = createSortedListItem(2)
    list.add(item1)
    list.add(item2)
    expect(list.toArray()).to.eql([item1, item2])
  })

  describe('#$type', () => {
    it('is SortedList', () => {
      const inst = new SortedList()
      expect(inst.$type).to.equal('SortedList')
    })
  })
})
