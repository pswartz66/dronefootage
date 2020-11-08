import React from 'react';
import './PublicHeader.css';
import MdMenu from 'react-ionicons/lib/MdMenu';

const PublicHeader = (props) => {

    console.log(props);

    return (
        <nav className="navbar navbar-default navbar-fixed-top">

            <MdMenu fontSize="28px" color="white" />
            <div className="">{props.userName}</div>

        </nav>

    )

}

export default PublicHeader;