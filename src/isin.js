import format from 'string-format'
import rq from 'request-promise'
import cio from 'cheerio'
import iconv from 'iconv-lite'
import {market_type} from './defs.js'

const str_mode_listed = 2 // 上市
const str_mode_otc = 4 // 上櫃

const isin_url = 'http://isin.twse.com.tw/isin/C_public.jsp?strMode={}'
const listed_url = format(isin_url, market_type.listed.str_mode)
const otc_url = format(isin_url, market_type.otc.str_mode)
const fetch = async (url = listed_url, proxy = undefined) => {
    let isin_html = iconv.decode(await rq({
        uri: url,
        encoding: null,
        proxy: proxy 
    }), 'BIG5')
    let isin_table = cio.load(isin_html)
    let raw_rows = isin_table('tbody').children()
    // const n_rows = raw_rows.length - 2
    let res = []
    const cell = (row, i) => {
        const node = row.children[i].children[0]
        return node === undefined ? '' : node.data
    }
    for(let i in raw_rows) {
        const raw_row = raw_rows[i]
        if(raw_row.children === undefined) continue
        if(raw_row.children.length <= 4) continue
        const code_name_str = cell(raw_row, 0)
        const isin          = cell(raw_row, 1)
        const start         = cell(raw_row, 2)
        const market        = cell(raw_row, 3)
        const group         = cell(raw_row, 4)
        const cfi           = cell(raw_row, 5)
        const code_name     = code_name_str.split('　')
        const code          = code_name[0]
        const name          = code_name[1]
        if(start.split('/').length < 3) continue
        res.push([market, code, name, group, start, isin, cfi])
    }
    return res
}
let cache_enabled = true
const enable_cache = (flag) => {
    cache_enabled = flag
}
const get_all = async (proxy = undefined) => {
    let res = await fetch(listed_url, proxy)
    return res.concat(await fetch(otc_url, proxy))
}
const isin_mod = {
    get_all: get_all,
    fetch: fetch
}
export default isin_mod
