import React, { useEffect, useState } from 'react';
import './PublicHeader.css';
import appLogo from '../../assets/images/dfLogo.png';
import MdSearch from 'react-ionicons/lib/MdSearch';
import MdPerson from 'react-ionicons/lib/MdPerson';

const PublicHeader = (props) => {

    let [showMenu, setShowMenu] = useState(false);

    const openMenu = () => setShowMenu(!showMenu);

    // useEffect(() => {

    // }, [showMenu]);

    console.log(props);

    return (
        <nav className="navbar navbar-default navbar-fixed-top">

            <div className="nav-left">
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
            </div>

            <div className="nav-right">
                <MdPerson onClick={() => openMenu()} className="user-icon" color="#282C34" />
                <div className="user-name">{props.userName}</div>

                {(showMenu) ?
                    <div className="drop-down-visible">
                        <button className="view-profile-btn" type="submit">View Profile</button>
                        <div className="dropdown-divider"></div>

                        <div className="dropdown-header">Account</div>
                        {/* <div> */}
                            <div className="dropdown-sub">Settings</div>
                            <div className="dropdown-sub">Help</div>

                            <div className="dropdown-divider-t"></div>
                            

                            <div className="dropdown-header">Sign Out</div>
                        {/* </div> */}

                    </div>
                    :
                    null
                }

            </div>

        </nav>

    )
}

export default PublicHeader;