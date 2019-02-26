const foodController = require("../controllers/foodController");

module.exports = function(app) {
  // Posts a food if user is logged in, otherwise redirect to signin page
  app.post("/api/food", foodController.postFood);
};