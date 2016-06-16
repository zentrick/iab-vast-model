import {Extension} from '../../../src/extension/default'
import testBase from './_base'

describe('Extension', () => {
  const createInstance = () => {
    const inst = new Extension()
    return inst
  }

  testBase(createInstance)
})
