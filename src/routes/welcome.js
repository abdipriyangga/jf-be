const express = require("express");
const welcomeRouter = express.Router();

welcomeRouter.get("/", (req, res) => {
  res.send("Welcome to JF Test API");
});

module.exports = welcomeRouter;