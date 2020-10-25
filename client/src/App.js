import dfLogo from './assets/images/df_logo.jpg'
import './App.css';
import {
  Link
} from 'react-router-dom';

import Profile from './pages/Profile'
import PublicPg from './pages/PublicPg'


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img alt="blank" src={dfLogo}
            style={{
              height: '260px',
              width: '462px',
              borderRadius: '10px',
              border: '3px solid #3D7AAC',
              boxShadow: '0px 0px 80px 0px black'
            }} />
          <div className="App-signup-login">
            <Link to="/signup" className="signup">
              Sign Up
            </Link>

            <Link to="/login" className="login">
              Login
            </Link>
          </div>
          

        </header>
      </div>

  );
}

export default App;
