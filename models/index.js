// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/config.js");

// Creates a "Diary" model that matches up with DB
var Diary = sequelize.define("diary", {
  symptom: {
    type: Sequelize.STRING, allowNull: true,
    severity: Sequelize.STRING, allowNull: true,
    createdAt: Sequelize.DATE, defaultValue: Sequelize.NOW
  },
  food: {
    type: Sequelize.STRING, allowNull: true,
    createdAt: Sequelize.DATE, defaultValue: Sequelize.NOW
  },
  drink: {
    type: Sequelize.STRING, allowNull: true,
    createdAt: Sequelize.DATE, defaultValue: Sequelize.NOW
  }
}, {
  freezeTableName: true
});

// Syncs with DB
Diary.sync();

// Makes the Diary Model available for other files (will also create a table)
module.exports = Diary;
