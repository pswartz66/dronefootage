const router = require('express').Router();
const signupRoute = require('./user');

// Sign up route
router.use('/authenticate', signupRoute);

module.exports = router;