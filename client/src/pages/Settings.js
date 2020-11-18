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
                        className="settings-left-pane-account" 
                        to="/settings/account"
                        exact={true}
                    >
                        Account Information
                    </NavLink>
                    <NavLink 
                        className="settings-left-pane-privacy" 
                        to="/settings/privacy"
                        exact={true}

                    >
                        Privacy
                    </NavLink>
                    <NavLink 
                        className="settings-left-pane-help" 
                        to="/settings/help"
                    >
                        Help
                    </NavLink>
                    <NavLink 
                        className="settings-left-pane-delete" 
                        to="/settings/delete"
                    >
                        Delete Account
                    </NavLink>
                </div>

                <div className="settings-right-pane">
                    <Switch>
                        <Route path="/settings/account" component={AccountInfo} />
                        <Route path="/settings/privacy" component={Privacy} />
                        <Route path="/settings/help" component={Help} />
                        <Route path="/settings/delete" component={DeleteAccount} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Settings;