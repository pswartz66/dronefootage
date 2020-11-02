const router = require('express').Router();
const controller = require('../../controllers/controller');

// /user == signup route from axios front end -> see utils folder
router.route('/user').post(controller.signup);

// /login == login route from axios front end -> see utils folder
router.route('/login').post(controller.login)

// /info/:user_email
router.route('/user/:email').get(controller.userInfo)


module.exports = router;