import axios from "axios";
import defaults from "./config";

export default {
    login: function (area_code,mobile) {
        return axios
            .post(defaults.baseURL+'/auth/login', {
                area_code,
                mobile
            }).then(r => r.data)
            .then(response => {
                return response;
            });
    },
    getRegister: function (query) {
        return axios
            .get(defaults.baseURL+'/auth/register', {
                    params: {
                        ...Object.assign({}, query)
                    }
                }
            ).then(r => r.data)
            .then(response => {
                return response;
            });
    },
    verifyMobile: function (query) {
        return axios
            .get(defaults.baseURL+'/auth/mobileCodeVerification', {
                    params: {
                        ...Object.assign({}, query)
                    }
                }
            ).then(r => r.data)
            .then(response => {
                return response;
            });
    },
    loginEmail: function (area_code,mobile,email_exists) {
        return axios
            .post(defaults.baseURL+'/auth/emailLogin', {
                email_exists,
                area_code,
                mobile
            }).then(r => r.data)
            .then(response => {
                return response;
            });
    },
    loginByEmail: function (email) {
        return axios
            .post(defaults.baseURL+'/auth/loginByEmail', {
                email
            }).then(r => r.data)
            .then(response => {
                return response;
            });
    },
    verifyEmail: function (query) {
        return axios
            .get(defaults.baseURL+'/auth/emailCodeVerification', {
                params: {
                    ...Object.assign({}, query)
                }
            }).then(r => r.data)
            .then(response => {
                return response;
            });
    },
    register: function (name,email,full_mobile,area_code,mobile,register_email) {
        return axios
            .post(defaults.baseURL+'/auth/register', {
                name,
                email,
                full_mobile,
                area_code,
                mobile,
                register_email
            }).then(r => r.data)
            .then(response => {
                return response;
            });
    }
}



// WEBPACK FOOTER //
// ./resources/zidApi/store/auth.js