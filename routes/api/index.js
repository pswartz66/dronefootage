const router = require('express').Router();
const signupRoute = require('./signup');

// Sign up route
router.use('/authenticate', signupRoute);

module.exports = router;