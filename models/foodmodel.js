// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a model that matches up with DB
var Food = sequelize.define("food", {
  food: Sequelize.STRING
});

// Syncs with DB
Food.sync();

// Makes the Food Model available for other files (will also create a table)
module.exports = Food;
