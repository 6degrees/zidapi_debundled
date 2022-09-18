import axios from "axios";
import defaults from "./config";

export default {
    fetchAddresses: function () {
        return axios
            .get(defaults.baseURL+'/checkout/chooseAddress')
            .then(r => r.data)
            .then(response => {
                return response
            })
    },
    setAddress: function (address_id) {
        return axios
            .post(defaults.baseURL+'/checkout/setShippingAddress',
                {address_id: address_id})
            .then(r => r.data)
            .then(response => {
               return response
            })
    },
    fetchShippingMethods: function () {
        return axios
            .get(defaults.baseURL+'/checkout/chooseShippingMethod')
            .then(r => r.data)
            .then(response => {
               return response;
            })
    },
    setShippingMethod: function (method, shipping_method_id) {
        return axios
            .post(defaults.baseURL+'/checkout/setShippingMethod',
                {
                    method,
                    shipping_method_id
                })
            .then(r => r.data)
            .then(response => {
                return response
            })
    },
    fetchPaymentMethods: function () {
        return axios
            .get(defaults.baseURL+'/checkout/choosePaymentMethod')
            .then(r => r.data)
            .then(response => {
               return response;
            })
    },
    setPaymentMethod: function (payment_method_id,payment_option) {
        return axios
            .post(defaults.baseURL+'/checkout/setPaymentMethod',
                {
                    payment_method_id,
                    payment_option
                })
            .then(r => r.data)
            .then(response => {
                return response;
            })
    },
    fetchOrder: function () {
        return axios
            .get(defaults.baseURL+'/checkout/confirm')
            .then(r => r.data)
            .then(response => {
                return response;
            })
    },
    confirmOrder: function (cart_payment_request_token , comment) {
        return axios
            .post(defaults.baseURL+'/checkout/'+cart_payment_request_token+'/confirmOrder',
                {
                    customer_notes: comment
                })
            .then(r => r.data)
            .then(response => {
                return response;
            })
    },
    applePayPaymentSession: function (cartPaymentRequestToken, paymentMethodCode, validationUrl) {
        return axios
            .post(defaults.baseURL + '/checkout/' + cartPaymentRequestToken + '/apple-pay-session/' + paymentMethodCode,
                {
                    validation_url: validationUrl
                })
            .then(r => r.data)
            .then(response => {
                return response;
            })
    },
    confirmApplePay: function (cartPaymentRequestToken, paymentToken, comment) {
        return axios
            .post(defaults.baseURL + '/checkout/' + cartPaymentRequestToken + '/confirm-apple-pay-order',
                {
                    payment_token: paymentToken,
                    customer_notes: comment
                })
            .then(r => r.data)
            .then(response => {
                return response;
            })
    }
}



// WEBPACK FOOTER //
// ./resources/zidApi/store/checkout.js