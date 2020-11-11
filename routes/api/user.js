const router = require('express').Router();
const controller = require('../../controllers/controller');
const passport = require('../../config/passport/local');
const path = require('path');

// /user == signup route from axios front end -> see utils folder
router.route('/user').post(controller.signup);

// /login == login route from axios front end -> see utils folder
router.route('/login').post(controller.login, passport.authenticate('local'), (req, res) => {
    const { user_email } = req.body;
    let user_info = {
        user_email
    }

    console.log('this is the final user')
    console.log(user_info);
    // send the user's email back to client
    res.send(user_info);
})
// /logout user and remove cookie
router.route('/logout').get(controller.logoutUser, (req, res) => {
    let userStatus = null;
    res.clearCookie('connect.sid', { path: '/'}).status(200).send({ status: userStatus });
    // res.send({ status: userStatus });
    console.log('Session destroyed: ', req.session.destroy());
    req.logout();
});


// /info/:user_email
router.route('/user/:email').get(controller.userInfo)


module.exports = router;