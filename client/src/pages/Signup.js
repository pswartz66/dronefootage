import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');


    return (
        <div className="signup-container">
            <form className="signup-form">
                <h1 className="signup-header">Signup</h1>
                <div className="signup-divider" />
                
                <div className="signup-inputs">
                    <label for="fname">First name</label>
                    <input
                        type="text"
                        name="firstName"
                        onChange={setFirstName}
                        placeholder="First name..."
                    />
                    <label for="lname">Last name</label>

                    <input
                        type="text"
                        name="lastName"
                        onChange={setLastName}
                        placeholder="Last name..."
                    />
                    <label for="email">Email</label>

                    <input
                        type="text"
                        name="email"
                        onChange={setEmail}
                        placeholder="Email..."
                    />

                    <br />
                    <button className="signup-btn" type="button">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;