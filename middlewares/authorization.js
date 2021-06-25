const Model = require("../models");

const Authorization = async (req, res, next) => {
  try {
    if (req.admin) {
      next();
    } else {
      throw {
        name: "customError",
        status: 401,
        message: "Unauthorized",
      };
    }
  } catch (err) {
    next(err);
  }
};

module.exports = Authorization;