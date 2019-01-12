const express = require("express");
const app = express()
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const passport = require("passport")
const session = require("express-session")
var bodyParser = require('body-parser')
var env = require('dotenv').load()


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(express.static("public"));


app.get('signin', function (req, res) {
    res.send('Welcome to Passport with Sequelize');
});


//Models
var models = require("./app/models");


//Routes
var authRoute = require('./app/routes/auth.js')(app, passport);


//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);

// Route config -------------------------------------------/
require("./app/routes/htmlRoutes")(app);
require("./app/routes/apiRoutes")(app);

//Sync Database
models.sequelize.sync().then(function () {
    console.log('Connected to Database')

}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!")
});


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
