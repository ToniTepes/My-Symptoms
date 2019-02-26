module.exports = {
  development: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "deardoctor_db",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "testdb",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    jawsDB: "JAWSDB_URL",
    dialect: "mysql"
  }
};