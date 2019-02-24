const db = require("../models");
let symptomController = module.exports;

symptomController.postSymptom = (req, res) => {
    console.log(req.body);
    let data = {symptom: req.body.symptom, severity: req.body.severity};
    db.Symptom.create(data).then(function (results) {
      res.json(results);
    });
  }