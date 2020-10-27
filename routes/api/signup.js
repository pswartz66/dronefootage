const router = require('express').Router();
const controller = require('../../controllers/controller');

router.route('/signup')
    .post(controller.signup);

module.exports = router;