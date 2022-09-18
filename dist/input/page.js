import axios from "axios";
import defaults from "./config";

export default {
    fetch: function (slug,id) {
        if(id){
            return axios
                .get(defaults.baseURL+'/pages/'+id)
                .then(r => r.data)
                .then(response => {
                    return response
                })
        }
        return axios
            .get(defaults.baseURL+'/pages/'+slug)
            .then(r => r.data)
            .then(response => {
                return response
            })
    },
    fetchFaq: function () {
        return axios
            .get(defaults.baseURL+'/pages/faqs')
            .then(r => r.data)
            .then(response => {
                return response
            })
    },
    fetchShippingAndPayment: function () {
        return axios
            .get(defaults.baseURL+'/pages/shipping-and-payment')
            .then(r => r.data)
            .then(response => {
                return response
            })
    }
}


// WEBPACK FOOTER //
// ./resources/zidApi/store/page.js