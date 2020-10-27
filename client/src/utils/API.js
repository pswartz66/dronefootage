import axios from 'axios';

export default {
    Signup: function(obj) {
        return axios.post('/api/authenticate/signup', obj);
    }
};

