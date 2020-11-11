import React, { useState } from 'react';
import './Signup.css';
import API from '../utils/API';
import { Redirect } from 'react-router-dom';

const Signup = () => {
    // initial variables
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    let [redirectTo, setRedirect] = useState(null);
    let [db_user, setDb_user] = useState('');

    const handleSubmit = (e) => {
        // prevent default attribute for submit button
        e.preventDefault();

        // push data to an object -> to send through api
        const userObj = {
            first_name: firstName,
            last_name: lastName,
            user_email: email,
            user_password: password
        }

        // test console log
        // console.log('Front end:');
        // console.log(userObj);

        // Register is synonymous to "Signup"
        // changed the axios function from signup to register
        // due to naming/importing restrictions
        API.Register(userObj)
            .then(res => {
                console.log('Signed up data: ', res.data)
                setDb_user(res.data.email);
                setRedirect('/public')
            })
            .catch(err => console.error(err))


        // reset input fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }

    return (
        <>
            {(redirectTo) !== null ?

                <Redirect to={{ pathname: "/public", state: db_user }} />
                :
                <div className="signup-container">
                    <form className="signup-form">
                        <h1 className="signup-header">Signup</h1>
                        <div className="signup-divider" />

                        <div className="signup-inputs">

                            <label htmlFor="fname">First name</label>
                            <input
                                type="text"
                                name="firstName"
                                onChange={e => setFirstName(e.target.value)}
                                value={firstName}
                                placeholder="First name..."
                            />

                            <label htmlFor="lname">Last name</label>
                            <input
                                type="text"
                                name="lastName"
                                onChange={e => setLastName(e.target.value)}
                                value={lastName}
                                placeholder="Last name..."
                            />

                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                placeholder="Email..."
                            />

                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                placeholder="Password..."
                            />
                            <br />
                            <button onClick={handleSubmit} className="signup-btn" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            }
        </>
    )
}

export default Signup;