const express = require("express");
const mongoose = require("mongoose");

const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('morgan')('combined'));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// Initialize passport and restore authentication state if any from the session
// app.use(passport.initialize());
// app.use(passport.session());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Use routes
app.use(routes);

// Endpoint
const endpoint = 'mainDB';

// Start mongo db server
mongoose.connect(process.env.MONGO_URI || `mongodb://localhost/${endpoint}`);

// Listen for server events
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
