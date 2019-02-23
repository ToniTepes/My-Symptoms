const db = require("../models/foodmodel.js");
let foodController = module.exports;

foodController.postFood = (req, res) => {
    console.log(req.body);
    db.Food.create({
      food: req.body.food
    }).then(function (results) {
      res.json(results);
    });
  }