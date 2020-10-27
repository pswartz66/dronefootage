const router = require("express").Router()
const sign_up_route = require("./signin");

// Sign up route
router.use("/signup", sign_up_route);

module.exports = router;