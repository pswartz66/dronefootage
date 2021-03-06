const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const db = require('../../../models')

// store cookie inside the browser that includes the user
passport.serializeUser((user, done) => {
    console.log('Serialized ID: ', user);
    return done(null, {_id: user._id });
})
// takes the cookie from the browser and returns a user from it
passport.deserializeUser((id, done) => {
    console.log('Deserialized ID: ', id);
    // find user in the database with the id that matches the cookies id
    db.UserDB.findOne({ _id: id }, 'email', (err, user) => {
        if (err) {
            console.log('Deserialize user ' + err)
        };
        return done(null, user);
    })
})

// use the local strategy
passport.use(LocalStrategy);

module.exports = passport;