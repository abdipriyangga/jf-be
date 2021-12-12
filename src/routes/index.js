const express = require("express");
const auth = require("./auth");
const products = require("./products");
const users = require("./users");
const mainRouter = express.Router();
const welcomeRouter = require("./welcome");

mainRouter.use("/auth", auth);
mainRouter.use("/users", users);
mainRouter.use("/products", products);
mainRouter.use("/", welcomeRouter);


module.exports = mainRouter;