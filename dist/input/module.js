import axios from "axios";
import defaults from "./config";

export default {
    fetchAll: function () {
        return axios
            .get(defaults.baseURL+'/modules/catalogDataStructure')
            .then(r => r.data)
            .then(response => {
                return response;
            });
    }
}


// WEBPACK FOOTER //
// ./resources/zidApi/store/module.js