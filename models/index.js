'use strict'
//const env = require('dotenv');  
const Sequelize = require('sequelize');  
const sequelize = require("../config/connection.js");

// Connect all the models/tables in the database to a db object, 
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

//Models/tables
db.users = require('../models/users.js');
db.symptom = require('../models/symptommodel.js');//(sequelize, Sequelize);  
db.food = require('../models/foodmodel.js');//(sequelize, Sequelize);  
db.drink = require('../models/drinkmodel.js');//(sequelize, Sequelize);

//Relations
//db.users.hasMany(db.symptom);
//db.users.hasMany(db.food);
//db.users.hasMany(db.drink);
db.symptom.belongsTo(db.users);  
db.food.belongsTo(db.users);  
db.drink.belongsTo(db.users);  


module.exports = db;  


//=============== this section just works, yo ==============
// // Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references my connection to the DB.
// var sequelize = require("../config/connection.js");

// // Creates a model that matches up with DB
// var Symptom = sequelize.define("symptom", {
//   symptom: Sequelize.STRING,
//   severity: Sequelize.STRING
// });

// // Syncs with DB
// Symptom.sync();

// // Makes the Symptom Model available for other files (will also create a table)
// module.exports = Symptom;
//========================================================

//original
// "use strict";

// var fs = require("fs");
// var path = require("path");
// var Sequelize = require("sequelize");
// var basename = path.basename(module.filename);
// var env = process.env.NODE_ENV || "development";
// var config = require(__dirname + "/../config/config.json")[env];
// var db = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//   var sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

// fs.readdirSync(__dirname)
//   .filter(function (file) {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach(function (file) {
//     var model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(function (modelName) {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;