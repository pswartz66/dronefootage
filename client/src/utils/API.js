import axios from 'axios';

const AXIOS_API = {
    // Register is synonymous to "Signup"
    // changed the axios function from signup to register
    // due to naming/importing restrictions
    Register: function (obj) {
        return axios.post('/api/authenticate/user', obj);
    },
    LoginUser: function (obj) {
        return axios.post('/api/authenticate/login', obj);
    },
    LogoutUser: function () {
        return axios.get('/api/authenticate/logout');
    },
    saveImageToDB: function (obj) {
        return axios.post('/api/authenticate/user-profile-image', obj);
    }

}

export default AXIOS_API;