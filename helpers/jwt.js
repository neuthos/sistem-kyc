const jwt = require("jsonwebtoken")

const signToken = (obj) => {
  return jwt.sign(obj, process.env.SECRET_KEY)
}

const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY)
}

module.exports = {
  signToken,
  verifyToken
}
