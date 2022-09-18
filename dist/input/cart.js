import axios from "axios";
import defaults from "./config";

export default {
    fetch: function () {
        return axios
            .get(defaults.baseURL+'/cart/view')
            .then(r => r.data)
            .then(response => {
                return response
            })
    },
    addProduct: function (product_id, quantity, options,custom_fields) {
        return axios
            .post(defaults.baseURL+'/cart/' + product_id + '/add',
                {
                    quantity,
                    ...Object.assign({},options),
                    custom_fields
                })
            .then(r => r.data)
            .then(response => {
                return response
            })
    },
    updateProduct: function (product_id, quantity, options) {
        return axios
            .post(defaults.baseURL+'/cart/' + product_id + '/update',
                {
                    quantity: quantity,
                    ...options
                })
            .then(r => r.data)
            .then(response => {
                return response
            })
    },
    removeProduct: function (product_id) {
        return axios
            .post(defaults.baseURL+'/cart/' + product_id + '/remove')
            .then(r => r.data)
            .then(response => {
                return response
            })
    },
    redeemCoupon: function (coupon_code) {
        return axios
            .post(defaults.baseURL+'/cart/coupon/redeem',{
                couponCode:coupon_code
            })
            .then(r => r.data)
            .then(response => {
                return response
            })
    },
    removeCoupon: function () {
        return axios
            .post(defaults.baseURL+'/cart/coupon/remove')
            .then(r => r.data)
            .then(response => {
                return response
            })
    }

}



// WEBPACK FOOTER //
// ./resources/zidApi/store/cart.js