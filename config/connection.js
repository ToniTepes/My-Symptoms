// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
const Sequelize = require('sequelize');  
require('dotenv').config({path:'../.env'});

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {  
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dialect: 'mysql',
  define: {
    underscored: true
  }
});

console.log(process.env.DATABASE_PASSWORD);
console.log(process.env.DATABASE_PORT);

// Exports the connection for other files to use
module.exports = sequelize;
