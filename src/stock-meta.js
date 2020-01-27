import {market_type} from './defs.js'
class StockMeta {
    constructor(code, name, isin, start, type, group) {
        this.code = code
        this.name = name
        this.isin = isin
        this.start = `${parseInt(start[0] + 1911)}/${start[1]}/${start[2]}`
        if(typeof(type) === 'string') {
            this.type = market_type.from_string(type)
        } else {
            this.type = type
        }
        this.group = group
    }
}

export default StockMeta