var db = require("../models");

module.exports = function(app) {
  /*
    // Get all examples
    app.get("/api/examples", function(req, res) {
      db.Example.findAll({}).then(function(dbExamples) {
        res.json(dbExamples);
      });
    });

    // Create a new example
    app.post("/api/examples", function(req, res) {
      db.Example.create(req.body).then(function(dbExample) {
        res.json(dbExample);
      });
    });

    // Delete an example by id
    app.delete("/api/examples/:id", function(req, res) {
      db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
      });
    }); 
  */

  // Get all symptoms
  app.get("/api/symptoms", function(req, res) {
    db.symptoms.findAll({}).then(function(dbSymptoms) {
      res.json(dbSymptoms);
    });
  });

  // Create a new symptom
  app.post("/api/symptoms", function(req, res) {
    db.symptoms.create(req.body).then(function(dbSymptoms) {
      res.json(dbSymptoms);
    });
  });

  // Delete a symptom by id
  // ====== (can this be narrowed by degree of severity?) ======
  app.delete("/api/symptoms/:id", function(req, res) {
    db.symptoms
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbSymptoms) {
        res.json(dbSymptoms);
      });
  });

  // Get all foods
  app.get("/api/food", function(req, res) {
    db.food.findAll({}).then(function(dbFood) {
      res.json(dbFood);
    });
  });

  // Create a new food
  app.post("/api/food", function(req, res) {
    db.food.create(req.body).then(function(dbFood) {
      res.json(dbFood);
    });
  });

  // Delete a food by id
  app.delete("/api/food/:id", function(req, res) {
    db.food
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbFood) {
        res.json(dbFood);
      });
  });

  // Get all drinks
  app.get("/api/drink", function(req, res) {
    db.srink.findAll({}).then(function(dbDrink) {
      res.json(dbDrink);
    });
  });

  // Create a new drink
  app.post("/api/drink", function(req, res) {
    db.drink.create(req.body).then(function(dbDrink) {
      res.json(dbDrink);
    });
  });

  // Delete a drink by id
  app.delete("/api/drink/:id", function(req, res) {
    db.drink
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbDrink) {
        res.json(dbDrink);
      });
  });
};
