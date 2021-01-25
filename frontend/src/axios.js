import ax  from "axios";

const axios = ax.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Content-type': 'application/json'
    }
})

// axois.defaults.headers.common['Authorization'] = 'AUTH TOKEN';


export default axios;