import React, { useEffect, useState } from 'react';
import PublicHeader from '../components/PublicHeader';
import './Profile.css';
import MdPersonAdd from 'react-ionicons/lib/MdPersonAdd';
import Modal from 'react-modal';
import API from '../utils/API';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

function Profile(props) {

    let userEmail = props.location.state[0];
    let userFirstName = props.location.state[1].toUpperCase();
    let userLastName = props.location.state[2].toUpperCase();

    console.log('Profile: ', props.location.state);
    const user = props.location.state;


    const [selectedFile, setSelectedFile] = useState()
    const [profileImg, setProfileImg] = useState(undefined);
    const [imgStr, setImgStr] = useState('');

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setProfileImg(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        const strObjUrl = objectUrl.substring(22, objectUrl.length);
        setProfileImg(objectUrl)
        setImgStr(strObjUrl);


        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // first image selected
        setSelectedFile(e.target.files[0])

        let userObj = {
            currentUser: userEmail,
            userImage: imgStr
        }

        closeModal();

        // save image to DB
        API.saveImageToDB(userObj)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }



    // modal functionality
    const [modalIsOpen, setModalIsOpen] = useState(false);
    let subtitle;

    function openModal() {
        setModalIsOpen(true);
    }
    function afterOpenModal() {
        subtitle.style.color = 'black';
    }
    function closeModal() {
        setModalIsOpen(false);
    }


    return (
        <div>
            <PublicHeader userData={user} />

            <div className="profile-container">

                <div className="profile-card-left">

                    <div className="profile-card-img">
                        <div>
                            {(profileImg) === undefined ?
                                <>
                                    <MdPersonAdd
                                        onClick={openModal}
                                        className="profile-img-icon"
                                        fontSize="28px"
                                        color="#282c34"
                                    >
                                    </MdPersonAdd>
                                </>
                                :
                                <div>
                                    <img alt="profileImage" src={profileImg} />
                                </div>
                            }

                        </div>
                    </div>
                    <div className="profile-card-info">
                        <h4 className="profile-card-name">{userFirstName} {userLastName}</h4>
                        <p className="profile-background">Background</p>
                        <p className="profile-drone-exp">Drone Experience: 6yrs</p>

                    </div>
                </div>

                <div className="profile-card-center">
                    <div className="top-left-quad">

                    </div>
                    <div className="top-right-quad">
                        
                    </div>
                    <div className="bottom-left-quad">
                        
                    </div>
                    <div className="bottom-right-quad">
                        
                    </div>

                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h3 ref={_subtitle => (subtitle = _subtitle)}>Select Image</h3>
                    <input className="profile-modal-input" type="file" name="file" accept="image/*" onChange={onSelectFile} />

                    <a onClick={closeModal} href="none" className="closeModalBtn">
                        Cancel
                    </a>
                </Modal>

            </div>

        </div>
    )
}

export default Profile;