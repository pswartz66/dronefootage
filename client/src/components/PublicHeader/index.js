import React, { useState } from 'react';
import './PublicHeader.css';
import appLogo from '../../assets/images/dfLogo.png';
import MdSearch from 'react-ionicons/lib/MdSearch';
import MdPerson from 'react-ionicons/lib/MdPerson';
import { Link } from 'react-router-dom';
import API from '../../utils/API';

const PublicHeader = (props) => {

    let [showMenu, setShowMenu] = useState(false);

    const openMenu = () => setShowMenu(!showMenu);

    // console.log(props);
    let userEmail = props.userData[0];
    let userFirstName = props.userData[1];
    let userLastName = props.userData[2];
    let userArr = [userEmail, userFirstName, userLastName];

    const logoutSession = () => {
        API.LogoutUser().then(res => {
            console.log(res.data);
        })
    }

    return (
        <>
        <nav className="navbar navbar-default navbar-fixed-top">

            <div className="nav-left">
                <Link to={{ pathname: "/public", state: userArr }}>
                    <img className="dfLogo" src={appLogo} alt="logo" />
                </Link>
                <form>
                    <MdSearch fontSize="16px" color="#282c34" />

                    <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        className="searchField"
                    />

                </form>
            </div>

            <div className="nav-right">
                <MdPerson onClick={() => openMenu()} className="user-icon" color="#282C34" />
                <div className="user-name">{userEmail}</div>

                {(showMenu) ?
                    <div className="dropdown-visible">
                        <Link to={{ pathname: "/profile", state: props.userData }} className="view-profile-btn">View Profile</Link>
                        <div className="dropdown-divider"></div>

                        <div className="dropdown-header">Account</div>
                        <Link to="/settings" className="dropdown-sub">Settings</Link>
                        <Link to="/help" className="dropdown-sub">Help</Link>

                        <div className="dropdown-divider-t"></div>

                        <Link onClick={() => logoutSession()} to="/" className="dropdown-signout">Sign Out</Link>

                    </div>
                    :
                    null
                }

            </div>
        </nav>

    </>
    )   
}

export default PublicHeader;