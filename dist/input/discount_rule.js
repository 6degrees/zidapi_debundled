import axios from "axios";
import defaults from "./config";

export default {
    fetchAll: function () {
        return axios
            .get(defaults.baseURL+'/discount-rules')
            .then(r => r.data)
            .then(response => {
                return response
            })
    }
}


// WEBPACK FOOTER //
// ./resources/zidApi/store/discount_rule.js