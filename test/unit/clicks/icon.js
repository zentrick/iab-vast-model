import {IconClicks} from '../../../src/clicks/icon'
import testBase from './_base'

describe('IconClicks', () => {
  const createInstance = () => {
    const inst = new IconClicks()
    return inst
  }

  testBase(createInstance)
})
