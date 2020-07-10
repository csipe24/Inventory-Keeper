// Require Sequelize Package
let Sequelize = require("sequelize");

let sequelize = new Sequelize("inventory", "root", "password", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
