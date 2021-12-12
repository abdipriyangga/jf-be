const products = require("express").Router();
const productController = require("../controllers/products.controller");
const auth = require("../middleware/checkToken");
const upload = require("../helpers/upload");

products.patch("/:id", auth, upload, productController.updateProduct);
products.delete("/:id", auth, productController.deleteProduct);
products.post("/", auth, upload, productController.createProduct);
products.get("/", auth, productController.detailProducts);

module.exports = products;