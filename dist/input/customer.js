import axios from "axios";
import defaults from "./config";

export default {
    fetchAddresses: function () {
        return axios
            .get(defaults.baseURL+'/customer/myAddresses')
            .then(r => r.data)
            .then(response => {
                return response
            })
    },
    fetchOrders: function () {
        return axios
            .get(defaults.baseURL+'/customer/myOrders')
            .then(r => r.data)
            .then(response => {
                return response
            })
    },
    fetchOrder: function (order_code) {
        return axios
            .get(defaults.baseURL+'/orders/'+order_code+'/invoice')
            .then(r => r.data)
            .then(response => {
                return response
            })
    },
    addAddress: function (address_country_id,address_city_id,address_street,address_district,from_page,address_formatted,address_lat,address_lng) {
        return axios
            .post(defaults.baseURL+'/customer/addAddress',{
                address_country_id,
                address_city_id,
                address_street,
                address_district,
                address_formatted,
                address_lat,
                address_lng,
                from_page
            })
            .then(r => r.data)
            .then(response => {
                return response
            })
    },
    updateAddress: function (address_id,address_country_id,address_city_id,address_street,address_district,address_formatted,address_lat,address_lng) {
        return axios
            .post(defaults.baseURL+'/customer/updateAddress',{
                address_id,
                address_country_id,
                address_city_id,
                address_street,
                address_district,
                address_formatted,
                address_lat,
                address_lng
            })
            .then(r => r.data)
            .then(response => {
                return response
            })
    },
    deleteAddress: function (address_id) {
        return axios
            .post(defaults.baseURL+'/customer/deleteAddress',{
                address_id
            })
            .then(r => r.data)
            .then(response => {
                return response
            })
    },
    updateProfile: function (name,email) {
        return axios
            .post(defaults.baseURL+'/customer/updateProfile',{
                name,
                email
            })
            .then(r => r.data)
            .then(response => {
                return response
            })
    },

    updateEmail: function (email) {
        return axios
            .post(defaults.baseURL + '/customer/updateEmail', {
                name,
                email
            })
            .then(r => r.data)
            .then(response => {
                return response
            })
    }
}



// WEBPACK FOOTER //
// ./resources/zidApi/store/customer.js