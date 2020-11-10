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
    // get a specific user by passing their email
    // userInfo == users email they signed up with
    getUser: function(userEmail) {
        return axios.get('/api/authenticate/user/' + userEmail);
    }
}

export default AXIOS_API;