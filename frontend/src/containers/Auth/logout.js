import axios from "../../axios";

const logout = () => {
    axios.post('account/logout/', {
        "refresh_token": localStorage.getItem("refresh_token")
    }).then(() => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        delete axios.defaults.headers.common["Authorization"];
        window.location.href = '/login';
    }).catch(err => console.log(err));
    return null;
}
export default logout;