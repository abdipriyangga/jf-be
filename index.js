require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mainRouter = require("./src/routes");
const sequelize = require("./src/config/sequelize");
const { PORT } = process.env;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`APP running on port ${PORT}`);
  sequelize.sync();
});