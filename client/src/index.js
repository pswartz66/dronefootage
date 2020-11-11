import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signup from './pages/Signup'
import Login from './pages/Login'
import PublicPg from './pages/PublicPg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
  // useHistory,
  // useLocation
} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/public" component={PublicPg} />

      </Switch>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



