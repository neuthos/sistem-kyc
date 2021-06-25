const User = require("express").Router()
const Controller = require("../controllers/userController")
const checkAuth = require("../middlewares/checkAuth")

User.get("/user", checkAuth, Controller.getUserData)
User.post("/kyc-validation", checkAuth, Controller.Validation)

module.exports = User