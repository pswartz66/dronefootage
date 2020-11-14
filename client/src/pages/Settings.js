import React from 'react';
import './Settings.css';
import { Link } from 'react-router-dom';
import AccountInfo from '../components/AccountInfo';

const Settings = (props) => {


    return (
        <div className="settings-container">
            <div className="settings-top-pane">

            </div>
            <div className="settings-flex-container">
                <div className="settings-left-pane">
                    <Link to="/accountinfo">Account Information</Link>
                     

                    <ul>User information</ul>

                    <ul>Random</ul>

                </div>

                <div className="settings-right-pane">



                </div>
            </div>
        </div>
    )
}

export default Settings;