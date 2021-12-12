const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");
const UserModel = require("./users.model");

const Product = sequelize.define("products", {
  userId: Sequelize.INTEGER,
  productName: Sequelize.STRING,
  price: Sequelize.INTEGER,
  images: Sequelize.STRING,
  description: Sequelize.STRING,
});

Product.belongsTo(UserModel, { sourceKey: "id" });
module.exports = Product;