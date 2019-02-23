const symptomController = require("../controllers/symptomController");

module.exports = function(app) {
  // Posts a symptom if user is logged in, otherwise redirect to signin page
  app.post("/api/symptom", symptomController.postSymptom);
};