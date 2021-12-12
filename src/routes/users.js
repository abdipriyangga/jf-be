const users = require("express").Router();
const userController = require("../controllers/users.controller");
const auth = require("../middleware/checkToken");

// ENDPOINT
users.get("/", auth, userController.detailUser);
module.exports = users;