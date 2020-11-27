import React from 'react';
import PublicHeader from '../PublicHeader';
import './Reveal.css';

const Reveal = (props) => {
    console.log('Reveal', props.location.state);

    return (
        <div>
            {/* <PublicHeader userData={props.location.state} />  */}
            {/* Reveal Videos go here */}

            <div className="reveal-container">

            </div>
        </div>
    )
}

export default Reveal;