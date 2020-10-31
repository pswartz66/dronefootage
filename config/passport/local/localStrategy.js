const db = require('../../../models');
const passport = require('passport');
const bcrypt = require('bcrypt');
const localStrategyPP = require('passport-local').Strategy;

passport.use(
    // user_email = req.body.email
    // user_password = req.body.password
    // done = move on to next step once localStrategy is defined
    new localStrategyPP((user_email, user_password, done) => {
        db.UserDB.findOne({ email: user_email }, (err, user_email) => {
            if (err) throw err;
            // null == error and false == user_email
            if (!user_email) return (null, false);
            // if the user does exist in the db we ned to compare passwords
            if (user_email) {
                bcrypt.compare(user_password, (err, result) => {
                    if (err) throw err;
                    // if the password matches return no error messages and the user_email
                    if (result === true) {
                        return done(null, user_email);
                    } else {
                        // if comparison fails return an error message
                        return done(null, false);
                    }
                })
            }
        })
    })
)
// store cookie inside the browser that includes the user
passport.serializeUser((user, cb) => {
    cb(null, user.id);
})
// takes the cookie from the browser and returns a user from it
passport.deserializeUser((id, cb) => {
    // find user in the database with the id that matches the cookies id
    db.UserDB.findOne({ _id: id }, (err, user_email) => {
        if (err) throw err;
        if (user_email) {
            cb(err, user_email)
        }
    })
})

module.exports = passport;