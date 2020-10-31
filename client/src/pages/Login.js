import React, { useState } from 'react';
import './Login.css';
import API from '../utils/API';
import { Redirect } from 'react-router-dom';

function Login() {
    // initial variables
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    // let [emailValid, setEmailValid] = useState(true);
    // let [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        // prevent default attribute for submit button
        e.preventDefault();

        // push data to an object similar to sign up page
        const userObj = {
            user_email: email,
            user_password: password
        }

        // test console log
        console.log('Front end:');
        console.log(userObj);

        API.LoginUser(userObj)
            .then(res => {
                console.log(res.data)
                // setIsLoggedIn(true);
                
            })
            .catch(err => console.error(err))

        // reset input fields
        setEmail('');
        setPassword('');
    }

    // const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


    return (
        <div className="login-container">
            <form className="login-form">
                <h1 className="login-header">Login</h1>
                <div className="login-divider" />

                <div className="login-inputs">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        placeholder={"Email..."}
                    />


                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        placeholder={"Password..."}
                    />
                    <br />

                    {/* {(validEmailRegex.test(email) ? <div></div> : (<div>Email not valid</div>) )} */}

                    <button onClick={handleSubmit} className="login-btn" type="submit">Submit</button>

                </div>

            </form>
        </div>
    )
}

export default Login;