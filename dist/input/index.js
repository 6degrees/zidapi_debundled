import axios from "axios";
import module from './module'
import settings from './settings'
import config from './config'
import auth from './auth'
import cart from './cart'
import checkout from './checkout'
import customer from './customer'
import page from './page'
import product from './product'
import discount_rule from './discount_rule'

let init = function({baseURL,headers,storeId,permalink,ip,cartSessionId,customerToken}) {

    console.log(`permalink: ${permalink}`)
    console.log(`cartSessionId: ${cartSessionId}`)
    console.log(`customerToken: ${typeof customerToken}`)
    console.log(`ip: ${ip}`)
    console.log(`storeId: ${storeId}`)
    console.log(`headers: ${typeof headers}`)
    console.log(`baseURL: ${baseURL}`)

    config.baseURL = baseURL;
    config.headers = headers;
    axios.defaults.headers.common['NODE-SERVER'] = 'AyblopZoqS';
    axios.defaults.headers.common['Content-type'] = 'application/json; charset=utf-8';
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['store-id'] = storeId;
    axios.defaults.headers.common['permalink'] = permalink;
    axios.defaults.headers.common['ip'] = ip;
    axios.defaults.headers.common['cart-session-id'] = cartSessionId;
    axios.defaults.headers.common['customer-token'] = customerToken;
    
    if (headers) {
        axios.defaults.headers.common['session'] = '' + encodeURI(JSON.stringify(headers));
    }
}

let setConfig = function() {
    config.baseURL = baseURL
}

let setCartSessionId = function(cartSessionId) {
    console.log(cartSessionId)
    axios.defaults.headers.common['cart-session-id', cartSessionId]
    console.log(axios.defaults.headers)
}

export {
    init, 
    setConfig,
    setCartSessionId,
    config,
    module,
    settings,
    auth,
    product,
    customer,
    page,
    cart,
    checkout,
    discount_rule
}



// WEBPACK FOOTER //
// ./resources/zidApi/store/index.js