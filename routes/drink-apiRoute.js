const drinkController = require("../controllers/drinkController");

module.exports = function(app) {
  // Posts a symptom if user is logged in, otherwise redirect to signin page
  app.post("/api/drink", drinkController.postDrink);
};