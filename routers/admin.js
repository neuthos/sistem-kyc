const AdminRouter = require("express").Router()
const checkAuth = require("../middlewares/checkAuth")
const Authorization = require("../middlewares/authorization")
const Controller = require("../controllers/AdminController")

AdminRouter.get("/users", checkAuth, Authorization, Controller.getAllUser )
AdminRouter.get("/user/:id", checkAuth, Authorization, Controller.getUser )
AdminRouter.get("/userIdCard/:imageUrl", checkAuth, Authorization, Controller.readIDCardFile)
AdminRouter.get("/userPhotos/:imageUrl", checkAuth, Authorization, Controller.readUserPhotos)
AdminRouter.put("/user/:id", checkAuth, Authorization, Controller.verifyUser)

module.exports = AdminRouter