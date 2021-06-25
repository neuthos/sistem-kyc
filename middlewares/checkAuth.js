const { verifyToken } = require("../helpers/jwt")
const Model = require("../models")

module.exports = async (req, res, next) => {
  const access_token = req.headers.access_token

  if(!access_token) {
    return next({
      name: 'Auth Failed',
      message: 'Auth Failed. Check your credential'
    })
  }

  try {
    const payload = verifyToken(access_token);

    if(payload.isAdmin) {
      const admin = await Model.Admin.findOne({
        where: {
          id: payload.id
        }
      })

      if(!admin) {
        return next({
          name: 'Auth Failed',
          message: 'Auth Failed. Check your credential'
        })
      }

      req.admin = payload

      next()
    } else {
      const user = await Model.User.findOne({
        where: {
          id: payload.id
        }
      })
  
      if(!user) {
        return next({
          name: 'Auth Failed',
          message: 'Auth Failed. Check your credential'
        })
      }
      req.user = payload

      next()
    }

  } catch (err) {
    next(err)
  }
}