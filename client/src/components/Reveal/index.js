import React, { useState, useRef, useEffect } from 'react';
import PublicHeader from '../PublicHeader';
import MdThumbsDown from 'react-ionicons/lib/MdThumbsDown';
import MdThumbsUp from 'react-ionicons/lib/MdThumbsUp';
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline';
import MdAdd from 'react-ionicons/lib/MdAdd';
import MdDownload from 'react-ionicons/lib/MdDownload';
import sampleVid from '../../assets/videos/sample-mp4.mp4';
import './Reveal.css';

const Reveal = (props) => {
    console.log('Reveal', props.location.state);

    let videos = ['vid1', sampleVid, 'vid3', 'vid4', 'vid5', 'vid6'
        ,sampleVid,sampleVid,sampleVid,sampleVid,sampleVid
    ];

    const [showSort, setShowSort] = useState(false);
    const [showFilter, setShowFilter] = useState(false);

    const openSort = () => {
        setShowSort(!showSort)
    };

    const openFilter = () => {
        setShowFilter(!showFilter)
    };

    const addToFavorites = (videoID) => {
        console.log(videoID, "add to favorites in user profile");
    }

    let sortRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if (!sortRef.current.contains(event.target)) {
                setShowSort(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }

    })


    return (
        <div>
            <PublicHeader userData={props.location.state} path={props.location.pathname} />
            {/* Reveal Videos go here */}

            <div className="reveal-container">

                {(videos) !== [] ?
                    <>
                        <div className="reveal-filter-bar">
                            <div className="reveal-left-header">Reveal Drone Shots</div>

                            <div className="reveal-right-header">
                                <div ref={sortRef} onClick={() => openSort()} className="reveal-sort">Sort</div>
                                {(showSort) ? (
                                    <div className="dropdown-sort">
                                        <div className="stacked-sort">
                                            <div>Price: High to Low</div>
                                            <div>Price: Low to High</div>

                                        </div>

                                    </div>)
                                    :
                                    null
                                }



                                <div className="reveal-bar">|</div>
                                <div onClick={() => openFilter()} className="reveal-filter">Filter</div>
                            </div>


                        </div>
                        <div className="reveal-type-vids">
                            {videos.map(video => {
                                return (
                                    <div id={video} key={video}>
                                    {(video.slice(-4)) === ".mp4" ?
                                        <div className="video-card">
                                            <div className="video-top-card">
                                                <MdAdd className="add-icon" />

                                            </div>

                                                <video controls className="video-main">
                                                    <source src={video} type="video/mp4" />
                                                    
                                                </video>

                                            <div className="video-bottom-card">
                                                <MdThumbsDown className="thumbs-down" />
                                                <MdHeartOutline onClick={() => addToFavorites(video.toString())} className="heart-favorite" />
                                                <MdThumbsUp className="thumbs-up" />

                                            </div>
                                        </div>
                                        : null
                                }

                                    </div>
                                )
                            })}

                        </div>
                    </>

                    :
                    <div className="no-videos">
                        no videos to display...
                    </div>
                }

            </div>


        </div>
    )
}

export default Reveal;