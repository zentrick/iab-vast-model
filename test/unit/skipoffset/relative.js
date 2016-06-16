import {RelativeSkipoffset} from '../../../src/skipoffset/relative'
import testBase from './_base'

describe('RelativeSkipoffset', () => {
  const createInstance = () => {
    const inst = new RelativeSkipoffset()
    return inst
  }

  testBase(createInstance)
})
