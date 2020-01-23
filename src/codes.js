import format from 'string-format'
import rq from 'request-promise'

const str_mode_listed = 2
const str_mode_otc = 4
const isin_url = 'http://isin.twse.com.tw/isin/C_public.jsp?strMode={}'
const listed_url = format(isin_url, str_mode_listed)
const otc_url = format(isin_url, str_mode_otc)

const fetch = (url) => {
    // const option = {
    //     uri: url,

    // }
}

export {fetch}
