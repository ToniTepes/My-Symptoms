// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Diary = require("../models/diary.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all diarys
  app.get("/api/all", function(req, res) {

    Diary.findAll({}).then(function(results) {
      res.json(results);
    });

  });

  // Get a specific diary
  app.get("/api/:diary", function(req, res) {

    if (req.params.diary) {
      Diary.findAll({
        where: {
          symptom: req.params.diary
        }
      }).then(function(results) {
        res.json(results);
      });
    }

  });

  // Get all diarys of a specific drink
  app.get("/api/drink/:drink", function(req, res) {

    if (req.params.drink) {
      Diary.findAll({
        where: {
          drink: req.params.drink
        }
      }).then(function(results) {
        res.json(results);
      });
    }

  });

  // Get all diarys from a specific food
  app.get("/api/food/:food", function(req, res) {

    if (req.params.food) {
      Diary.findAll({
        where: {
          food: req.params.food
        }
      }).then(function(results) {
        res.json(results);
      });
    }

  });
// ===== below section not currently needed =====
//   // Get all "long" diarys (diarys 300 pages or more)
//   app.get("/api/diarys/long", function(req, res) {

//     Diary.findAll({
//       where: {
//         pages: {
//           $gte: 300
//         }
//       },
//       order: "pages DESC"
//     }).then(function(results) {
//       res.json(results);
//     });

//   });

//   // Get all "short" diarys (diarys 150 pages or less)
//   app.get("/api/diarys/short", function(req, res) {

//     Diary.findAll({
//       where: {
//         pages: {
//           $lte: 150
//         }
//       },
//       order: "pages ASC"
//     }).then(function(results) {
//       res.json(results);
//     });

//   });

  // Add a diary entry
  app.post("/api/new", function(req, res) {

    console.log("Diary Data:");
    console.log(req.body);
    Diary.create({
      symptom: req.body.symptom,
      food: req.body.food,
      drink: req.body.drink
      //pages: req.body.pages
    });

  });

  // Delete a diary
  //===== not currently needed =====
  app.post("/api/delete", function(req, res) {

    console.log("Diary Data:");
    console.log(req.body);
    Diary.destroy({
      where: {
        id: req.body.id
      }
    });

  });

};
