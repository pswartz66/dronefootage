import axios from 'axios';

export default {
    // Register is synonymous to "Signup"
    // changed the axios function from signup to register
    // due to naming/importing restrictions
    Register: function (obj) {
        return axios.post('/api/authenticate/user', obj);
    },
    LoginUser: function (obj) {
        return axios.post('/api/authenticate/login', obj);
    },
    // get a specific user by passing their email
    // userInfo == users email they signed up with
    getUserEmail: function(userEmail) {
        return axios.get('/api/authenticate/info/' + userEmail);
    }
}



