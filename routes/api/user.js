const router = require('express').Router();
const controller = require('../../controllers/controller');

router.route('/user')
    .post(controller.signup);

module.exports = router;