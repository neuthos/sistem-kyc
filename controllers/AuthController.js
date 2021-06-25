const { Compare } = require("../helpers/bcrypt")
const { signToken } = require("../helpers/jwt")
const Model = require("../models")

class AuthController {
  static async Register (req, res, next) {
    try {
      if(!req.body.email) throw { message: "Please fill all the form"}
      const checkUser = await Model.User.findOne({
        where: {
          email: req.body.email
        }
      })

      if(checkUser) throw { message: "This email already registered" }

      const doCreate = await Model.User.create(req.body)

      return res.status(201).json({
        message: "Account created"
      })

    } catch (err) {
      next(err)
    }
  }

  static async LoginUser (req, res, next) {
    try {
      const { email, password, isAdmin } = req.body
      
      if(!email || !password ) throw { message: "Please fill the form"}

      if(!isAdmin) {
        const user = await Model.User.findOne({
          where: {
            email
          }
        })
  
        if(!user) throw { name: "Auth Failed", message: "Invalid Email or Password"}
  
        const checkPass = Compare(password, user.password)
        
        if(!checkPass) throw { name: "Auth Failed", message: "Invalid Email or Password"}
  
        const access_token = signToken({
          id: user.id,
          email: user.email,
          isAdmin: false
        }) 
  
        res.status(200).json({
          access_token,
          isAdmin: false,
        })
      } else {
        const admin = await Model.Admin.findOne({
          where: {
            email
          }
        })
  
        if(!admin)  throw { name: "Auth Failed", message: "Invalid Email or Password"}
  
        const checkPass = Compare(password, admin.password)
  
        if(!checkPass) throw { name: "Auth Failed", message: "Invalid Email or Password"}
  
        const access_token = signToken({
          id: admin.id,
          email: admin.email,
          isAdmin: true
        }) 
        
        return res.status(200).json({
          access_token,
          isAdmin: true,
        })
      }  
    } catch (err) {
      next(err)
    }
  }
}

module.exports = AuthController
