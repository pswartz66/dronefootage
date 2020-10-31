const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Signup Schema
const UserSchema = new Schema({
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

const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = UserModel;
