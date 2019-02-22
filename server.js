require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var authRoute = require('./app/routes/auth.js')(app,passport);
var db = require("./models");

var app = express();

// Authentication
var env = require('dotenv').load();
var passport = require('passport');
var session = require('express-session');
//var bodyParser = require('body-parser');

/* For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); */

var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);

// Auth Routes
var authRoute = require('./routes/auth.js')(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

//Models
var models = require("./models");

//Sync Database
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!") 
});

module.exports = app;
