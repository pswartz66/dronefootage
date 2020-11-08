import React from 'react';
import './PublicPg.css';
import PublicHeader from '../components/PublicHeader'

const PublicPg = (props) => {

    // user === email from the login page
    const user = props.location.state;

    return(
        <div>
            {/* Welcome to the public page {user} */}
            <PublicHeader userName={user} />


            <div className="public-container">

                <div className="wireframe">
                    <h2>Add user cards here</h2>            


                </div>
            </div>

        </div>
    )
}

export default PublicPg;
