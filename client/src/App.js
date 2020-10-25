import dfLogo from './assets/images/df_logo.jpg'
import './App.css';

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
          <a className="signup" href="/signup">
            Sign Up
        </a>
        
          <a className="login" href="/login">
            Login
        </a>
        </div>

      </header>
    </div>
  );
}

export default App;
