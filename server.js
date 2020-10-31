const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('./config/passport/local');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000", // location of app were building > currently in dev mode/local > change later
    credentials: true
}))
app.use(require('morgan')('combined'));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());
app.use(require('express-session')({ 
    secret: 'secretcode',
    resave: true, 
    saveUninitialized: false
}));
app.use(cookieParser('secretcode')) // must be the same as the express-session "secret"

// Initialize passport and restore authentication state if any from the session
app.use(passport.initialize());
// Call the serializers
app.use(passport.session());

// END of Middleware ----------------------------------------------------------------------

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Use routes
app.use(routes);

// Endpoint
const endpoint = 'mainDB';

// Start mongo db server
mongoose.connect(
    (process.env.MONGO_URI || `mongodb://localhost/${endpoint}`),
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log('Mongoose is connected')
    }
);

// Listen for server events
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
