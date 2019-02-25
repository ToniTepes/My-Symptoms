/* eslint-disable prettier/prettier */

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const db = require("../models");
const passport = require("../config/passport");
const Symptom = require("../models/symptommodel.js");
const Food = require("../models/foodmodel.js");
const Drink = require("../models/drinkmodel.js");
const Diary = require("../models/index.js")


// Routes
// =============================================================
module.exports = function (app) {

// Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
// So we're sending the user back the route to the members page because the redirect will happen on the front end
// They won't get this or even be able to access this page if they aren't authed
app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/members");
  });
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });
//
  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
//
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
//===============================================================

  // Add a symptom
  app.post("/api/symptom", function (req, res) {
    console.log("Symptom:");
    console.log(req.body);
    Symptom.create({
      symptom: req.body.symptom,
      severity: req.body.severity
    }).then(function (results) {
      res.json(results);
    });
  });

  // Add a food
  app.post("/api/food", function (req, res) {
    console.log("Food:");
    console.log(req.body);
    Food.create({
      food: req.body.food
    }).then(function (results) {
      res.json(results);
    });
  });

  // Add a drink
  app.post("/api/drink", function (req, res) {
    console.log("Drink:");
    console.log(req.body);
    Drink.create({
      drink: req.body.drink
    }).then(function (results) {
      res.json(results);
    });
  });

  // Get all entries
  app.get("/api/diary", function (req, res) {
    Diary.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  // Get a specific symptom
  app.get("/api/:symptom", function (req, res) {
    Symptom.findAll({
      where: {
        symptom: req.params.symptom
      }
    }).then(function (results) {
      res.json(results);
    });
  });
//   // Get all books of a specific genre
//   app.get("/api/genre/:genre", function(req, res) {
//     Book.findAll({
//       where: {
//         genre: req.params.genre
//       }
//     }).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Get all books from a specific author
//   app.get("/api/author/:author", function(req, res) {
//     Book.findAll({
//       where: {
//         author: req.params.author
//       }
//     }).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Get all "long" books (books 150 pages or more)
//   app.get("/api/books/long", function(req, res) {
//     Book.findAll({
//       where: {
//         pages: {
//           $gte: 150
//         }
//       },
//       order: [["pages", "DESC"]]
//     }).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Get all "short" books (books 150 pages or less)
//   app.get("/api/books/short", function(req, res) {
//     Book.findAll({
//       where: {
//         pages: {
//           $lte: 150
//         }
//       },
//       order: [["pages", "ASC"]]
//     }).then(function(results) {
//       res.json(results);
//     });
//   });



//   // Delete a book
//   app.delete("/api/book/:id", function(req, res) {
//     console.log("Book ID:");
//     console.log(req.params.id);
//     Book.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function() {
//       res.end();
//     });
//   });
// };

//original 
// var db = require("../models");

// module.exports = function(app) {
//   /*
//     // Get all examples
//     app.get("/api/examples", function(req, res) {
//       db.Example.findAll({}).then(function(dbExamples) {
//         res.json(dbExamples);
//       });
//     });
//     // Create a new example
//     app.post("/api/examples", function(req, res) {
//       db.Example.create(req.body).then(function(dbExample) {
//         res.json(dbExample);
//       });
//     });
//     // Delete an example by id
//     app.delete("/api/examples/:id", function(req, res) {
//       db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//         res.json(dbExample);
//       });
//     }); 
//   */

//   // Get all symptoms
//   app.get("/api/symptoms", function(req, res) {
//     db.symptoms.findAll({}).then(function(dbSymptoms) {
//       res.json(dbSymptoms);
//     });
//   });

//   // Create a new symptom
//   app.post("/api/symptoms", function(req, res) {
//     db.symptoms.create(req.body).then(function(dbSymptoms) {
//       res.json(dbSymptoms);
//     });
//   });

//   // Delete a symptom by id
//   // ====== (can this be narrowed by degree of severity?) ======
//   app.delete("/api/symptoms/:id", function(req, res) {
//     db.symptoms
//       .destroy({
//         where: {
//           id: req.params.id
//         }
//       })
//       .then(function(dbSymptoms) {
//         res.json(dbSymptoms);
//       });
//   });

//   // Get all foods
//   app.get("/api/food", function(req, res) {
//     db.food.findAll({}).then(function(dbFood) {
//       res.json(dbFood);
//     });

//   // Create a new food
//   app.post("/api/food", function(req, res) {
//     db.food.create(req.body).then(function(dbFood) {
//       res.json(dbFood);
//     });
//   });

//   // Delete a food by id
//   app.delete("/api/food/:id", function(req, res) {
//     db.food
//       .destroy({
//         where: {
//           id: req.params.id
//         }
//       })
//       .then(function(dbFood) {
//         res.json(dbFood);
//       });
//   });

//   // Get all drinks
//   app.get("/api/drink", function(req, res) {
//     db.srink.findAll({}).then(function(dbDrink) {
//       res.json(dbDrink);
//     });
//   });

//   // Create a new drink
//   app.post("/api/drink", function(req, res) {
//     db.drink.create(req.body).then(function(dbDrink) {
//       res.json(dbDrink);
//     });
//   });

//   // Delete a drink by id
//   app.delete("/api/drink/:id", function(req, res) {
//     db.drink
//       .destroy({
//         where: {
//           id: req.params.id
//         }
//       })
//       .then(function(dbDrink) {
//         res.json(dbDrink);
//       });
//   });