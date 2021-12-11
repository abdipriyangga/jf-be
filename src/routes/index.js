const express = require("express");
const auth = require("./auth");
const mainRouter = express.Router();
const welcomeRouter = require("./welcome");

mainRouter.use("/auth", auth);
mainRouter.use("/", welcomeRouter);


module.exports = mainRouter;