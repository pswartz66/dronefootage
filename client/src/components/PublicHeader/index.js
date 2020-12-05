import React, { useEffect, useState, useRef } from 'react';
import './PublicHeader.css';
import appLogo from '../../assets/images/dfLogo.png';
import MdSearch from 'react-ionicons/lib/MdSearch';
import MdPerson from 'react-ionicons/lib/MdPerson';
import MdCart from 'react-ionicons/lib/MdCart';

import { Link } from 'react-router-dom';
import API from '../../utils/API';

const PublicHeader = (props) => {

    let [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        setShowMenu(!showMenu);
    }
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

    // reference to outside click of the drop down
    let dropdownRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            // console.log(dropdownRef);
            
            // must have a useref to the div below
            if (!dropdownRef.current.contains(event.target)) {
                setShowMenu(false);                
            }
        }
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    });

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

            {/* ref must be outside of the open menu function for outside click to work */}
            <div ref={dropdownRef} className="nav-right">
                {((props.path) === `/public/reveal` ||
                 (props.path) === `/public/tracking` ||
                 (props.path) === `/public/panning` ||
                 (props.path) === `/public/zoom` ||
                 (props.path) === `/public/orbital` ||
                 (props.path) === `/public/overhead`
                )
                ? <MdCart color="white" className="shopping-cart"/>  : null}
                <div className="user-name">{userEmail}</div>

                <MdPerson onClick={() => openMenu()} className="user-icon" color="#282C34" />

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