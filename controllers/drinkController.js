const db = require("../models/drinkmodel.js");
let drinkController = module.exports;

drinkController.postDrink = (req, res) => {
    console.log(req.body);
    db.Drink.create({
      drink: req.body.drink
    }).then(function (results) {
      res.json(results);
    });
  }