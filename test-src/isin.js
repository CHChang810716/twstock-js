import isin from '../lib/isin.js'

const main = async () => {
    const data = await isin.get_all()
    console.log(data[0])
    console.log(data[20])
    console.log(data[17640])
}

(async() => {
    try {
        await main()
    }catch(e) {
        console.error(e)
    }
})()