require("dotenv").config();
const express = require("express");
//const exphbs = require("express-handlebars");
const flash = require("connect-flash");
const models = require("./models");
const db = require("./models");

const app = express();
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const env = require('dotenv').load();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.static("public"));
app.use(flash());

// BodyParser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

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

// Sync Database
models.sequelize.sync().then(function(){
  console.log("Nice! Database looks fine!");
}).catch(function(err) {
  console.log(err, "Something went wrong with the database update.")
})

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


// const models = require("./models");
require("./config/passport/passport")(passport, models.User);

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