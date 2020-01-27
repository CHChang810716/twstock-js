import rp from 'request-promise'
import {pad2} from './utils.js'
const twse_url = 'http://www.twse.com.tw/'
class TWSEFetcher {
    constructor() {
        this.url = `${twse_url}exchangeReport/STOCK_DAY`
    }
    format(data) {
        return data
    }
    async fetch(year, month, sid) {
        let data = {}
        try {
            const raw_data = await rp(this.url, {
                qs: {
                    date: `${year}${pad2(month)}01`,
                    stockNo: sid
                },
                method: 'GET'
            })
            data = this.format(JSON.parse(raw_data))
        } catch(e) {
            data.stat = 'FAILED'
        }
        return data
    }
}

export default TWSEFetcher