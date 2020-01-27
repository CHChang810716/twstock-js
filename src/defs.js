const market_type_listed = {   // 上市
    id: 0,
    str_mode: 2,
    str: 'listed'
}
const market_type_otc = { 
    id: 0,
    str_mode: 4,
    str: 'otc'
}
const market_type_str_index = {
    [market_type_listed.str] : market_type_listed,
    [market_type_otc.str]: market_type_otc
}

const market_type_from_string = (str) => {
    return market_type_str_index[str]
}
const market_type = {
    listed: market_type_listed,
    otc: market_type_otc,
    from_string: market_type_from_string
}

export {market_type}