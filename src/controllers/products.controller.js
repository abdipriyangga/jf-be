const productModel = require("../models/products.model");
const { response: formResponse } = require("../helpers/formResponse");
const { APP_UPLOAD_ROUTE, APP_URL } = process.env;

exports.createProduct = async (req, res) => {
  const { id } = req.authUser;
  const { productName, price, description } = req.body;
  try {
    if (req.file) {
      req.body.images = req.file ? `${APP_UPLOAD_ROUTE}/${req.file.filename}` : null;
    }
    const product = await productModel.create({
      userId: id,
      productName: productName,
      price: price,
      images: req.body.images,
      description: description
    });
    await product.save();
    if (product) {
      return formResponse(res, 200, "Create product Successfully!", product);
    }
  } catch (error) {
    console.error(error);
  }
};

exports.detailProducts = async (req, res) => {
  const product = await productModel.findAll({
    where: {
      userId: req.authUser.id
    },
  });
  if (product) {
    return formResponse(res, 200, `Detail all product with id: ${req.authUser.id}`, product);
  } else {
    return formResponse(res, 404, "Sorry Id not found!");
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await productModel.findOne({
    where: {
      id: id
    }
  });
  if (product === null) {
    return formResponse(res, 404, "Sorry product not found!");
  } else {
    if (req.file) {
      req.body.images = req.file ? `${APP_UPLOAD_ROUTE}/${req.file.filename}` : null;
      product.set(req.body);
      await product.save();
      if (product.images !== null && !product.images.startsWith("http")) {
        product.images = `${APP_URL}${product.images}`;
      }
      return formResponse(res, 200, "Update product successfully!", product);
    } else {
      product.set(req.body);
      await product.save();
      if (product.images !== null && !product.images.startsWith("http")) {
        product.images = `${APP_URL}${product.images}`;
      }
      return formResponse(res, 200, "Update product successfully!", product);
    }
  }
};


exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await productModel.findByPk(id);
  await product.destroy();
  return formResponse(res, 200, `Delete product id: ${id} successfully!`, product);
};

exports.getProductId = async (req, res) => {
  const { id } = req.params;
  const product = await productModel.findByPk(id);
  try {
    if (product) {
      return formResponse(res, 200, `Detail product with id: ${id}`, product);
    } else {
      return formResponse(res, 404, "Sorry product not found!");
    }
  } catch (error) {
    return formResponse(res, 400, error);
  }
};