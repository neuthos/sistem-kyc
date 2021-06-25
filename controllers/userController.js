const Model = require("../models")
const path = require("path")

class UserController {
  static async Validation (req, res, next) {
    try {
      let input = {...req.body}
      input.isVerified = false
      input.UserId = req.user.id

      const checkIfVerified = await Model.UserDetail.findOne({
        where: {
          UserId: input.UserId
        }
      })
  
      if(checkIfVerified) {
        return res.status(400).json({
          message: "Your Account is verified"
        })
      }

      const userDetail = await Model.UserDetail.create(input)
      const idImages = req.files.ID_IMAGES
      const faceValidation = req.files.FACE_VALIDATION


      let idImagesFilename = `${userDetail.id}-${userDetail.id_type}-images.${(idImages.mimetype).split("/").pop()}`
      let faceValidationFilename = `${userDetail.id}-photos.${(faceValidation.mimetype).split("/").pop()}`

      const rootFolder = path.dirname(require.main.filename)

      await idImages.mv(`${rootFolder}/storage/ID_card/${idImagesFilename}`, err => {
        console.log(err ? err : "Id card saved")
      })

      await faceValidation.mv(`${rootFolder}/storage/Face_validation/${faceValidationFilename}`, err => {
        console.log(err ? err : "photos saved")
      })

      const updateUserDetail = await Model.UserDetail.update({
        id_image_url: idImagesFilename,
        photo_image_url: faceValidationFilename
      }, {
        where: {
          id: userDetail.id
        }
      })

      return res.status(200).json({
        message: "Success verify your account"
      })

    } catch (err) {
      console.log({err})
      next(err)
    }
  }


  static async getUserData(req, res, next) {
    try {
      const userId = req.user.id

      const user = await Model.User.findOne({
        where: {
          id: userId
        },
        include: {
           model: Model.UserDetail 
        }
      })

      res.status(200).json({
        user: {
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          UserDetail: user.UserDetail
        }
      })
    } catch (err) {
      next(err)
    }
  }

}

module.exports = UserController