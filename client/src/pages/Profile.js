import React from 'react';
import PublicHeader from '../components/PublicHeader';

function Profile(props) {

    let user = props.location.state;
    console.log('Profile: ', user);

    return(
        <div>
            <PublicHeader userName={user}/>

        </div>
    )
}

export default Profile;