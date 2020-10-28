const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Signup Schema
const SignupSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

const SignupModel = mongoose.model("SignupModel", SignupSchema);

module.exports = SignupModel;
