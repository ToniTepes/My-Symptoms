// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a model that matches up with DB
var Drink = sequelize.define("drink", {
    drink: Sequelize.STRING
});

// Syncs with DB
Drink.sync();

// Makes the Symptom Model available for other files (will also create a table)
module.exports = Drink;