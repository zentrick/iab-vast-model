import {RelativeTimeOffset} from '../../../src/time-offset/relative'
import testBase from './_base'

describe('RelativeTimeOffset', () => {
  const createInstance = () => {
    const inst = new RelativeTimeOffset()
    return inst
  }

  testBase(createInstance)
})
