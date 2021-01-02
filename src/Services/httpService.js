import { toast } from "react-toastify";
import axios from "axios";
// const axios = require('axios').default;

axios.defaults.headers.post["Content-Type"] = "application/json"

axios.interceptors.response.use(null, err => {
    const exerror = err.response && err.response.status >= 400 && err.response.status < 500;
    if (!exerror) {
        console.log(exerror)
        toast.error('مشکلی از سمت سرور پیش آمده', {
            position: 'bottom-right',
            closeOnClick: true
        })
    }
    return Promise.reject(err)
})

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}