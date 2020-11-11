import React, { useEffect, useState } from 'react';
import './PublicPg.css';
import PublicHeader from '../components/PublicHeader';
import { Redirect } from 'react-router-dom';


const PublicPg = (props) => {

    let [userStatus, setUserStatus] = useState(false);

    // user === email from the login page
    const user = props.location.state;

    


    return (
        <>
            { (user) ?
                <div>
                    <PublicHeader userName={user} />

                    <div className="public-container">

                        <div className="wireframe">
                            <h2>Add user cards here</h2>


                        </div>
                    </div>

                </div>
                :
                <Redirect to={{pathname: "/login", state: null }} />
            }
        </>
    )
}

export default PublicPg;
