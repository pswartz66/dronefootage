import React from 'react';
import API from '../utils/API';

function PublicPg() {

    const getUserInfo = () => {
        API.getUserEmail()
            .then(res => console.log(res.data))
            .catch(err => console.error(err))
    }

    getUserInfo();


    return(
        <div>
            Public
        </div>
    )
}

export default PublicPg;