// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // add route loads the add.html page, where users can enter new books to the db
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  // all route loads the all.html page, where all books in the db are displayed
  app.get("/diary", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/diary.html"));
  });

  // symptom route loads the symptom.html page, where symptom books in the db are displayed
  app.post("/symptom", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/addsymptom.html"));
  });

  // food route loads the food.html page, where food books in the db are displayed
  app.post("/food", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/addfood.html"));
  });

  // drink route loads the food.html page, where drink books in the db are displayed
  app.post("/drink", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/adddrink.html"));
  });

};
