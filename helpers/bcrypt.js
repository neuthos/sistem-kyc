const bcrypt = require("bcryptjs")

const Hash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt)
}

const Compare = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}

module.exports = {
  Hash, 
  Compare
}