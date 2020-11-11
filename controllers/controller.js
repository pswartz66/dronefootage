// require in the db models
const db = require('../models');
const bcrypt = require('bcrypt');
const passport = require('passport');
// const { authenticate } = require('passport');
// const localStrategyP = require('../config/passport/local/')

module.exports = {
    signup: function (req, res) {
        console.log('Made it to backend test');
        console.log(req.body);

        // destruct object
        const { first_name, last_name, user_email, user_password } = req.body;

        // check if the user is already signed up, if so then send some modal pop up
        // else add them into the database
        db.UserDB.findOne({ email: user_email }, async (err, doc) => {
            if (err) throw err;
            // here we should be sending this error message back to the front-end in some
            // sort of modal, currently it's just being logged in the console.
            if (doc) res.send(`User: ${user_email} Already Exists`);
            if (!doc) {
                const hashedPassword = await bcrypt.hash(user_password, 10);
                await db.UserDB.create({ firstname: first_name, lastname: last_name, email: user_email, password: hashedPassword })
                    .then(data => {
                        // res.json(data)
                        res.send(data)
                    })
                    .catch(err => res.status(422).json(err))
            }
        }).catch(err => {
            throw err;
        });


    },
    login: function (req, res, next) {
        console.log('login user email: ');
        // destruct object
        const { user_email } = req.body;

        // db.UserDB.findOne({ email: user_email }, (err, doc) => {
        //     // if there is an error then do not attempt authentication
        //     if (err) {
        //         console.log(`User: ${user_email} Does Not Exist, Please Sign Up`)
        //         doc.end();
        //     } else {

        //     }
        // })

        // continue to authentication
        next();

    },
    logoutUser: function (req, res, next) {
        console.log('Successfully logged out user and ended passport session')
        next();
    },
    // userInfo: function (req, res) {
    //     const { u_email } = req.params.user_email;

    //     db.UserDB.findOne({ email: u_email })
    //         .then(data => res.json(data))
    //         .catch(err => console.error(err))
    // }
}
