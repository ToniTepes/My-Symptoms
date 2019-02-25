require("dotenv").config();
const express = require("express");
const passport = require("./config/passport");
const session = require("express-session");
const flash = require("connect-flash");
const bodyParser = require("body-parser");
// const exphbs = require("express-handlebars");

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Middleware
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.static("public"));
app.use(flash());

//For body parser
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

// Passport
app.use(
  session({
    secret: 'clever girl', //process.env.SESSION_SECRET,
    resave: true,
    saveUnitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");

// Routes
require("./routes/user-apiRoute")(app);
require("./routes/symptom-apiRoute")(app);
require("./routes/food-apiRoute")(app);
require("./routes/drink-apiRoute")(app);
require("./routes/diary-apiRoute")(app);
require("./routes/htmlRoutes")(app);
require("./routes/auth")(app, passport);
require("./routes/htmlroutes.js")(app);
require("./routes/apiroutes.js")(app);


const models = require("./models");
require("./config/passport")(passport, models.User);

const syncOptions = {
  force: false
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;