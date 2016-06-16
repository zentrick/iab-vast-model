import {AbsoluteSkipoffset} from '../../../src/skipoffset/absolute'
import testBase from './_base'

describe('AbsoluteSkipoffset', () => {
  const createInstance = () => {
    const inst = new AbsoluteSkipoffset()
    return inst
  }

  testBase(createInstance)
})
