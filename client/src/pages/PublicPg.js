import React from 'react';
import './PublicPg.css';
import PublicHeader from '../components/PublicHeader';



const PublicPg = (props) => {

    // user === email from the login page
    const user = props.location.state;
    console.log('Public page intercept: ', user);


    // here it seems like we need an authentication function that runs
    // immediately everytime /public route is hit... 
    // will need a function that 
    // 1. verifies the _id or hashed password form the user
    // 2. returns the data as a check
    // 3. there needs to be some sort of gaurd here

    let categories = ['Reveal', 'Tracking', 'Panning', 'Upward/Downward', 'Orbital', 'Overhead'];

    return (
        <>
            <div>
                <PublicHeader userData={user} />

                <div className="public-container">
                    {(user) ?
                        <div className="public-container-margin">
                            <div className="public-container-categories">
                                {/* <h2>Add user cards here</h2> */}

                                {categories.map(category => {
                                    return (
                                        <div>
                                            <div className="category">
                                                {category}
                                            </div>
                                        </div>
                                    )
                                }
                                )}

                            </div>

                        </div>
                        :
                        <div>

                        </div>
                    }
                </div>

            </div>

        </>
    )
}

export default PublicPg;
