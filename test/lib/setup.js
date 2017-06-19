import chai from 'chai'
import dirtyChai from 'dirty-chai'
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised)
chai.use(dirtyChai)

global.expect = chai.expect
