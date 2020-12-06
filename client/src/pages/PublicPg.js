import React from 'react';
import './PublicPg.css';
import PublicHeader from '../components/PublicHeader';
import { NavLink } from 'react-router-dom';

const PublicPg = (props) => {

    // user === array of user data from the login page
    const user = props.location.state;
    console.log('Public page intercept: ', user);


    // here it seems like we need an authentication function that runs
    // immediately everytime /public route is hit... 
    // will need a function that 
    // 1. verifies the _id or hashed password form the user
    // 2. returns the data as a check
    // 3. there needs to be some sort of gaurd here

    let categories = ['Reveal', 'Tracking', 'Panning', 'Zoom', 'Orbital', 'Overhead'];

    return (
        <div>

            {(user) ?
                <>
                    <PublicHeader userData={user} />

                    <div className="public-container">

                        <div className="public-container-margin">

                            <div className="public-container-categories">
                                {categories.map(category => {
                                    return (
                                        <div key={category}>
                                            <NavLink
                                                to={{
                                                    pathname: `/public/${category.toLowerCase()}`,
                                                    state: user
                                                }}
                                                className="category"
                                                onClick={() => console.log(`clicked ${category}`)}
                                            >
                                                {category}
                                            </NavLink>

                                        </div>
                                    )
                                }
                                )}

                            </div>
                        </div>

                    </div>

                </>
                :
                <div>

                </div>

            }



        </div>

    )
}

export default PublicPg;
