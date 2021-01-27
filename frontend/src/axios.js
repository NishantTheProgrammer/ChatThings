import ax  from "axios";

const axios = ax.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 5000,
    headers: {

        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
})

if(localStorage.getItem('access_token')) {
    axios.defaults.headers.common['Authorization'] = "JWT " + localStorage.getItem('access_token');
}

axios.interceptors.response.use(
    response => response,
    error => {
      const originalRequest = error.config;
      const refresh_token = localStorage.getItem('refresh_token');
      
      if (error.response?.status === 401 && error.response?.statusText === "Unauthorized") {

          return axios
              .post('account/token/refresh/', {refresh: refresh_token})
              .then((response) => {

                  localStorage.setItem('access_token', response.data.access);
                  localStorage.setItem('refresh_token', response.data.refresh);

                  axios.defaults.headers['Authorization'] = "JWT " + response.data.access;
                  originalRequest.headers['Authorization'] = "JWT " + response.data.access;

                  return axios(originalRequest);
              })
              .catch(err => {
                  console.log('this error', err)
              });
      }
      return Promise.reject(error);
  }
);


export default axios;