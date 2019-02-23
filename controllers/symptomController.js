const db = require("../models/symptommodel.js");
let symptomController = module.exports;

symptomController.postSymptom = (req, res) => {
    console.log(req.body);
    db.Symptom.create({
      symptom: req.body.symptom,
      severity: req.body.severity
    }).then(function (results) {
      res.json(results);
    });
  }