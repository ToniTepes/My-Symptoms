// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const Diary = require("../models/index.js");

// Routes
// =============================================================
module.exports = function (app) {

    // Get all diarys
    app.get("/api/diary", function (req, res) {

        Diary.findAll({}).then(function (results) {
            res.json(results);
        });

    });

    // Get a specific diary
    app.get("/api/diary", function (req, res) {

        if (req.params.diary) {
            Diary.findAll({
                where: {
                    symptom: req.params.diary
                }
            }).then(function (results) {
                res.json(results);
            });
        }

    });

    // Get all diarys of a specific drink
    app.get("/api/drink", function (req, res) {

        if (req.params.drink) {
            Diary.findAll({
                where: {
                    drink: req.params.drink
                }
            }).then(function (results) {
                res.json(results);
            });
        }

    });

    // Get all diarys from a specific food
    app.get("/api/food", function (req, res) {

        if (req.params.food) {
            Diary.findAll({
                where: {
                    food: req.params.food
                }
            }).then(function (results) {
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

    // Add a diary symptom
    app.post("/api/symptom", function (req, res) {

        console.log("Diary Symptom:");
        console.log(req.body);
        let data = {symptom: req.body.symptom,
                    severity: req.body.severity};
    Diary.create(data).then(function (results) {
      res.json(results);
        //Diary.symptom.create({
        //    symptom: req.body.symptom.type,
        //    severity: req.body.symptom.severity
            //pages: req.body.pages
        });
    });

    // Add a diary food
    app.post("/api/food", function (req, res) {

        console.log("Diary Food:");
        console.log(req.body);
        let data = {food: req.body.food};
    Diary.create(data).then(function (results) {
      res.json(results);
        //Diary.food.create({
        //    food: req.body.food.type
        });
    });

    // Add a diary drink
    app.post("/api/drink", function (req, res) {

        console.log("Diary Drink:");
        console.log(req.body);
        let data = {drink: req.body.drink};
    Diary.create(data).then(function (results) {
      res.json(results);
        // Diary.drink.create({
        //     drink: req.body.drink.type
        });
    });

    // Delete a diary
    //===== not currently needed =====
    app.post("/api/delete", function (req, res) {

        console.log("Diary Data:");
        console.log(req.body);
        Diary.destroy({
            where: {
                id: req.body.id
            }
        });

    });

};