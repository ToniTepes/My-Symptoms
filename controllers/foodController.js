const db = require("../models");
let foodController = module.exports;

foodController.postFood = (req, res) => {
    console.log(req.body);
    let data = {food: req.body.food};
    db.Food.create(data).then(function (results) {
      res.json(results);
    });
  }