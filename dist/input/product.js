import axios from "axios";
import defaults from "./config";

export default {
    fetchAll: function (catId,query) {
        if(catId)
            return axios.get(defaults.baseURL+'/categories/'+catId,{params: {...Object.assign({}, query)}}).then(r => r.data).then(response => {
                    return response;
                });
        else
            return axios.get(defaults.baseURL+'/products',{params: {...Object.assign({}, query)}}).then(r => r.data).then(response => {
                    return response;
                })
    },
    fetchSales: function (query) {
        return axios.get(defaults.baseURL+'/products',{params: {...Object.assign({on_sale:true}, query)}}).then(r => r.data).then(response => {
                return response;
            })
    },
    fetch: function (id) {
        return axios.get(defaults.baseURL+'/products/'+id).then(r => r.data).then(response => {
            return response;
        })
    },
    fetchCategories: function () {
        return axios.get(defaults.baseURL+'/categories').then(r => r.data).then(response => {
                return response;
            })
    },
    setAvailabilityNotificationEmail: function (id,email) {
        return axios.post(defaults.baseURL+'/products/'+id+'/notifications',{email}).then(r => r.data).then(response => {
                return response;
            })
    }
}
