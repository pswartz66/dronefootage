import React from 'react';
import './Settings.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import AccountInfo from '../components/AccountInfo';
import Privacy from '../components/Privacy';
import Help from '../components/Help';
import DeleteAccount from '../components/DeleteAccount';

const Settings = (props) => {

    return (
        <div className="settings-container">
            <div className="settings-top-pane">

            </div>
            <div className="settings-flex-container">
                <div className="settings-left-pane">
                    <NavLink 
                        onClick={console.log('Account')}
                        className="settings-left-pane-account" 
                        to="/settings"
                    >
                        Account Information
                    </NavLink>
                    <NavLink 
                        onClick={console.log('Privacy')}
                        // onClick={console.log('privacy was clicked')} 
                        className="settings-left-pane-privacy" 
                        to="/settings"
                    >
                        Privacy
                    </NavLink>
                    <NavLink 
                        onClick={console.log('Help')}
                        className="settings-left-pane-help" 
                        to="/settings"
                    >
                        Help
                    </NavLink>
                    <NavLink 
                        onClick={console.log('Delete')}
                        className="settings-left-pane-delete" 
                        to="/settings"
                    >
                        Delete Account
                    </NavLink>
                </div>

                <div className="settings-right-pane">
                    <Switch>
                        <Route path="/settings" render={() => <AccountInfo />} />
                        <Route path="/settings" component={Privacy} />
                        <Route path="/settings" component={Help} />
                        <Route path="/settings" component={DeleteAccount} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Settings;