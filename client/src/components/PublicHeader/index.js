import React from 'react';
import './PublicHeader.css';
import MdMenu from 'react-ionicons/lib/MdMenu';
import appLogo from '../../assets/images/dfLogo.png';
import MdSearch from 'react-ionicons/lib/MdSearch';

const PublicHeader = (props) => {

    console.log(props);

    return (
        <nav className="navbar navbar-default navbar-fixed-top">

            <img className="dfLogo" src={appLogo} alt="logo" />

            <form>
                <MdSearch fontSize="16px" color="#282c34" />

                <input
                    type="search"
                    name="search"
                    placeholder="Search"
                    className="searchField"
                />
                
            </form>
            <MdMenu fontSize="28px" color="white" />
            <div className="">{props.userName}</div>

        </nav>

    )
}

export default PublicHeader;