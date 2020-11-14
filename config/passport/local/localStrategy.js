const db = require('../../../models');
const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

const strategy =
    // user_email = req.body.email
    // user_password = req.body.password
    // done = move on to next step once localStrategy is defined

    new LocalStrategy(
        // must equal the object property names sent from client/frontend/axios
        {
            usernameField: 'user_email',
            passwordField: 'user_password'
        },

        // password here represents the password from the client login form
        function (username, password, done) {
            console.log('inside auth local strat', username);

            // user here represents each database user as it's own object
            db.UserDB.findOne({ email: username }, function (err, user) {
                
                if (err) return done(err);
                // null == error and false == user_email
                if (!user) return done(null, false);

                // if the user does exist in the db we ned to compare passwords
                // Using BCRYPT method
                if (user) {
                    
                    // password here represents the password from the client login form
                    // user.password represents the password that is already in the database
                    bcrypt.compare(password, user.password, (err, result) => {
                        if (err) throw err;
                        // if the password matches return no error messages and the user_email
                        // user is sent back to the route handler in routes/api/user response
                        if (result === true) {
                            console.log('Password Comparison Complete, Match Found!', user);
                            return done(null, user);
                            // db.UserDB.findOne({ email: username }, function (err, doc) {
                            //     if (err) { console.log(err)}
                            //     res.send(doc);
                            // })
                        }
                        // if the password does not match the users password
                        // log out a message/modal return false back to routes/api/user response
                        if (result === false) {
                            // if comparison fails return an error message
                            console.log('Password Comparison Failed, User DNE or Passwords do not match!')
                            return done(null, false);
                        }
                    })
                }
            })
        })



module.exports = strategy;