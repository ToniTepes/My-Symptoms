const db = require("../models");
let drinkController = module.exports;

drinkController.postDrink = (req, res) => {
    console.log(req.body);
    let data = {drink: req.body.drink};
    db.Drink.create(data).then(function (results) {
      res.json(results);
    });
  }