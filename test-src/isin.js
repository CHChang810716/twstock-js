import isin from '../lib/isin.js'
import should from 'should'
describe('isin', () =>{
    it('get all test', () => {
        return isin.get_all().then((data)=>{
            should.exist(data)
            should.exist(data.length)
            should.exist(data[0])
            should.exist(data[17640])
            should.exist(data[17640][0])
        })
    }).timeout(10000)
})