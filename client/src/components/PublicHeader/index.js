import React from 'react';
import './PublicHeader.css';

const PublicHeader = (props) => {

    console.log(props);

    return (
        <nav className="navbar navbar-default navbar-fixed-top">

            <div className="">{props.userName}</div>


        </nav>

    )

}

export default PublicHeader;