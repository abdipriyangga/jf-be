const authModel = require("../models/users.model");
const { response: formResponse } = require("../helpers/formResponse");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { APP_SECRET_KEY } = process.env;

exports.register = async (req, res) => {
  const { name, email, password, jenisKelamin } = req.body;
  try {
    const checkEmail = await authModel.findOne({ where: { email: email } });
    if (checkEmail !== null) {
      return formResponse(res, 401, "Email alredy exists!", null);
    } else {
      const hashPassword = await bcrypt.hash(password, await bcrypt.genSalt());
      const auth = await authModel.create({ name: name, email: email, password: hashPassword, jenisKelamin: jenisKelamin });
      return formResponse(res, 200, "register success!", auth);
    }
  } catch (error) {
    return formResponse(res, 400, error.message);
    // return formResponse(res, 400, "internal failure!", error);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const auth = await authModel.findOne({ where: { email: email } });
  // console.log(`password dari db ${auth.password} ${password}`);
  if (auth === null) {
    return formResponse(res, 404, "user not found!");
  } else {
    try {
      const checkPass = await bcrypt.compare(password, auth.password);
      // console.log('kondisi dua: ', checkPass);
      // console.log('kondisi dua: ', password);
      if (checkPass) {
        const token = jwt.sign({ id: auth.id, email: auth.email }, APP_SECRET_KEY, { expiresIn: 60 * 60 });
        return formResponse(res, 200, "login success!", { token, id: auth.id });
      } else {
        return formResponse(res, 400, "Wrong email or password!");
      }
    } catch (error) {
      return formResponse(res, 400, "internal failure!", error);
    }
  }
};
