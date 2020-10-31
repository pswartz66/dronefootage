const router = require('express').Router();
const userRoutes = require('./user');

// Sign up route
router.use('/authenticate', userRoutes);


module.exports = router;