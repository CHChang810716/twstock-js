import TWSEFetcher from '../lib/twse-fetcher.js'

const fetcher = new TWSEFetcher()
fetcher.fetch(2019, 7, '2330').then((data)=>{
    console.log(data)
}).catch(()=>{
    console.error('failed')
})
// describe('twse-fetcher', ()=>{
//     it('fetch', ()=>{
// 
//     }).timeout(10000)
// })