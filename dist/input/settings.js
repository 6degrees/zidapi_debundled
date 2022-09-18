import axios from "axios";
import defaults from "./config";

export default {


    fetchCountries: function () {
        return axios
            .get(defaults.baseURL+'/getCountries')
            .then(r => r.data)
            .then(response => {
                return response;
            });
    },

    fetchCitiesOfCountry: function (countryId) {
        return axios
            .get(defaults.baseURL+'/getCountryCities/'+countryId)
            .then(r => r.data)
            .then(response => {
                return response;
            });
    },

    fetchLayout: function () {
        return axios
            .get(defaults.baseURL+'/modules/catalogDataLayout')
            .then(r => r.data)
            .then(response => {
                return response;
            });
    },

    fetchTermsAndCondition: function () {
        return axios
            .get(defaults.baseURL+'/pages/terms-and-conditions')
            .then(r => r.data)
            .then(response => {
                return response;
            });
    },

    fetchPrivacyPolicy: function () {
        return axios
            .get(defaults.baseURL+'/pages/privacy-policy')
            .then(r => r.data)
            .then(response => {
                return response;
            });
    }
}



// WEBPACK FOOTER //
// ./resources/zidApi/store/settings.js