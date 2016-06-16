import {CreativeExtension} from '../../../src/extension/creative'
import testBase from './_base'

describe('CreativeExtension', () => {
  const createInstance = () => {
    const inst = new CreativeExtension()
    return inst
  }

  testBase(createInstance)
})
