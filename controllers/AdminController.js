const Model = require("../models")
const path = require("path")

class AdminController {
  static async getAllUser(req, res, next) {
    try {
      const users = await Model.User.findAll({
        include: {
           model: Model.UserDetail ,
        }
      })
  
      res.status(200).json(users)
    } catch (err) {
      next(err)
    }
  }

  static async getUser(req, res, next) {
    try {
      const userId = req.params.id

      const checkUser = await Model.User.findOne({
        where: {
          id: userId
        }
      })

      if(!checkUser) throw { message: "User not found" }

      const user = await Model.User.findOne({
        where: {
          id: userId
        },
        include: {
          model: Model.UserDetail
        }
      })

      res.status(200).json(user)
    } catch (err) {
      next(err)
    }
  }

  static async readUserPhotos(req, res, next) {
    try {
      const filename = req.params.imageUrl
      const filepath = path.join(__dirname, "../storage/Face_validation/" + filename)

      res.sendFile(filepath, err => {
        if(err) return res.sendStatus(err.status)
      })
    } catch (err) {
      next(err)
    }
  }

  static async readIDCardFile(req, res, next) {
    try {
      const filename = req.params.imageUrl
      const filepath = path.join(__dirname, "../storage/ID_card/" + filename)
      console.log(filepath)

      res.sendFile(filepath, err => {
        if(err) return res.sendStatus(err.status)
      })
    } catch (err) {
      next(err)
    }
  }

  static async verifyUser(req, res, next) {
    try {
      let userId = req.params.id

      const checkUser = await Model.UserDetail.findOne({
        where: {
          UserId: userId
        }
      })

      if(!checkUser) throw { message: "The user has not filled out the verification form" }

      const updateUser = await Model.UserDetail.update({
        isVerified: true
      }, {
        where: {
          UserId: userId
        }
      })

      res.status(200).json({
        message: "Update Success"
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = AdminController