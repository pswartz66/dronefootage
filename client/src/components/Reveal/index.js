import React from 'react';
import PublicHeader from '../PublicHeader';
import './Reveal.css';

const Reveal = (props) => {
    console.log('Reveal', props.location.state);

    let videos = ['video1', 'video2', 'video3', 'video4', 'video5', 'video6'];


    return (
        <div>
            <PublicHeader userData={props.location.state} />
            {/* Reveal Videos go here */}

            <div className="reveal-container">

                {(videos) !== [] ?
                    <>
                        <h3 style={{ marginTop: 80 }}>Reveal Drone Shots</h3>

                        <div className="reveal-type-vids">
                            {videos.map(video => {
                                return (
                                    <div className="video-card" key={video}>
                                        <div className="video-top-card">
                                            
                                        </div>

                                    </div>
                                )
                            })}

                        </div>
                    </>
                    :
                    <div style={{ marginTop: 120 }}>
                        no videos to display...
                    </div>
                }

            </div>
        </div>
    )
}

export default Reveal;