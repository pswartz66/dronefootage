// require in the db models
const db = require('../models');

module.exports = {
    signup: function (req, res) {
        console.log('Made it to backend test');
        console.log(req.body);

        // destruct object
        const { first_name, last_name, user_email, user_password } = req.body;

        db.UserDB.findOne({ email: user_email }, async (err, doc) => {
            if (err) throw err;
            // here we should be sending this error message back to the front-end in some
            // sort of modal, currently it's just being logged in the console.
            if (doc) res.send("User Already Exists");
            if (!res) {
                await db.UserDB.create({ firstname: first_name, lastname: last_name, email: user_email, password: user_password })
                    .then(data => res.json(data))
                    .catch(err => res.status(422).json(err))
            }
        }).catch(err => {
            throw err;
        })




    },
    login: function (req, res) {
        // destruct object
        const { login_email, login_password } = req.body


    }
}
