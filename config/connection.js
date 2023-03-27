const Sequelize = require("sequelize");
require("dotenv").config();

<<<<<<< HEAD
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "z3iruaadbwo0iyfp.cbetxkdyhwsb.us",
    dialect: "mysql",
    port: 3306,
  }
);
=======
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      process.env.DB_SECRET,
      {
        host: "127.0.0.1",
        dialect: "mysql",
        port: 3306,
      }
    );
>>>>>>> 7fa6536fae83d94ada8fd4aa719ee96624d67b2c

module.exports = sequelize;
