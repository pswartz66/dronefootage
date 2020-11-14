import React, { useState } from 'react';
import './Login.css';
import API from '../utils/API';
import { Redirect } from 'react-router-dom';

function Login() {
    // initial variables
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [redirectTo, setRedirect] = useState(null);
    let [db_user, setDb_user] = useState();
    let [shake, setShake] = useState('');

    const handleSubmit = (e) => {
        // prevent default attribute for submit button
        e.preventDefault();

        // push data to an object similar to sign up page
        const userObj = {
            user_email: email,
            user_password: password
        }
        // test console log
        // console.log('Front end:');
        // console.log(userObj);

        API.LoginUser(userObj)
            .then(res => {
                console.log(res.data);
                let tempArr = [
                    res.data.user_email,
                    res.data.first_name,
                    res.data.last_name
                ]

                if (res.data.user_email) {
                    setDb_user(tempArr);
                    setRedirect('/public')
                } else {
                    // if user form returns an error shake form 
                    // and reset css class after 1.5 seconds
                    setShake('shake');
                    setTimeout(() => {
                        setShake('')
                    }, 1500);
                }

            })
            .catch(err => {
                console.error(err)

                // if user form returns an error shake form 
                // and reset css class after 1.5 seconds
                setShake('shake');
                setTimeout(() => {
                    setShake('')
                }, 1500);

            })

        // reset input fields
        setEmail('');
        setPassword('');
    }

    return (
        <>
            {(redirectTo) !== null ?

                <Redirect to={{ pathname: "/public", state: db_user }} />
                :
                <div className="login-container">
                    <form className={`login-form ${shake}`}>
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
                                autoComplete={'test'}
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

                            <button onClick={handleSubmit} className="login-btn" type="submit">Submit</button>

                        </div>

                    </form>
                </div>
            }
        </>
    )
}

export default Login;