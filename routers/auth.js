const AuthRouter = require("express").Router()
const Controller = require("../controllers/AuthController")

AuthRouter.post("/register", Controller.Register)
AuthRouter.post("/login", Controller.LoginUser)

module.exports = AuthRouter