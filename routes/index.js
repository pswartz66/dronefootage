const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// Point Express Router to use the api routes
router.use('/api', apiRoutes);

// if no api routes are hit, then send the react app or login page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router;