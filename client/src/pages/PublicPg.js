import React from 'react';

function PublicPg(props) {

    // user === email from the login page
    const user = props.location.state;

    return(
        <div>
            Welcome to the public page {user}
        </div>
    )
}

export default PublicPg;
