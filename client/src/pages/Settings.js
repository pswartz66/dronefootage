import React from 'react';
import './Settings.css';
import { Switch, Route, Link } from 'react-router-dom';
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
                    <Link className="settings-left-pane-link" to="/settings">Account Information</Link>
                    <Link className="settings-left-pane-link" to="/settings">Privacy</Link>
                    <Link className="settings-left-pane-link" to="/settings">Help</Link>
                    <Link className="settings-left-pane-link" to="/settings">Delete Account</Link>
                </div>

                <div className="settings-right-pane">
                    <Switch>
                        <Route exact path="/settings" component={AccountInfo} />
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