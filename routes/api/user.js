const router = require('express').Router();
const controller = require('../../controllers/controller');
const passport = require('../../config/passport/local');
const path = require('path');
const db = require('../../models');

// /user == signup route from axios front end -> see utils folder
router.route('/user').post(controller.signup);

// /login == login route from axios front end -> see utils folder
router.route('/login').post(controller.login, passport.authenticate('local'), (req, res) => {
    const { user_email } = req.body;
    // console.log('/login route: ', req.body);
    // let user_info = {
    //     user_email,
    //     first_name,
    //     last_name
    // }
    // console.log('this is the final user', user_info)

    db.UserDB.findOne({ email: user_email }, async (err, doc) => {
        // if there is an error then do not attempt authentication
        if (err) {console.log(err)}

        console.log('this is the doc ', doc);

        const { email, firstname, lastname } = doc;

        let user_info = {
            user_email: email,
            first_name: firstname,
            last_name: lastname
        }
        
        // doc is the database user here
        res.send(user_info);
    })

    // send the user's email back to client
    // res.send(user_info);
})
// /logout user and remove cookie
router.route('/logout').get(controller.logoutUser, (req, res) => {
    let userStatus = null;
    res.clearCookie('connect.sid', { path: '/' }).status(200).send({ status: userStatus });
    // res.send({ status: userStatus });
    console.log('Session destroyed: ', req.session.destroy());
    req.logout();
});

router.route('/user-profile-image').post(controller.saveProfileImage);

// /info/:user_email
// router.route('/user/:email').get(controller.userInfo)


module.exports = router;