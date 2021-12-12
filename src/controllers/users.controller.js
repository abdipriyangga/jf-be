const userModel = require("../models/users.model");
const { response: formResponse } = require("../helpers/formResponse");
const { APP_URL } = process.env;

exports.detailUser = async (req, res) => {
  const { id } = req.authUser;
  const user = await userModel.findByPk(id);
  if (
    user.images !== null &&
    !user.images.startsWith("http")
  ) {
    user.images = `${APP_URL}${user.images}`;
  }
  return formResponse(res, 200, "Detail User: ", user);
};