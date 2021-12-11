const { DATABASE_URL } = process.env;
const Sequelize = require("sequelize");
// your credentials
const sequelize = new Sequelize(DATABASE_URL);

module.exports = sequelize;