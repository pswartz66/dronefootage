import React, { useState } from 'react';
import PublicHeader from '../PublicHeader';
import './Reveal.css';

const Reveal = (props) => {
    console.log('Reveal', props.location.state);

    let videos = ['video1', 'video2', 'video3', 'video4', 'video5', 'video6'];
    const [showSort, setShowSort] = useState(false);
    const [showFilter, setShowFilter] = useState(false);

    const openSort = () => {
        setShowSort(!showSort)
    };

    const openFilter = () => {
        setShowFilter(!showFilter)
    };

    


    return (
        <div>
            <PublicHeader userData={props.location.state} />
            {/* Reveal Videos go here */}

            <div className="reveal-container">

                {(videos) !== [] ?
                    <>
                        <div className="reveal-filter-bar">
                            <div className="reveal-left-header">Reveal Drone Shots</div>

                            <div className="reveal-right-header">
                                <div onClick={() => openSort()} className="reveal-sort">Sort
                                {(showSort) ? (
                                        <div className="dropdown-sort">
                                            

                                        </div>)
                                        :
                                        null
                                    }

                                </div>

                                <div className="reveal-bar">|</div>
                                <div onClick={() => openFilter()} className="reveal-filter">Filter</div>
                            </div>



                        </div>
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