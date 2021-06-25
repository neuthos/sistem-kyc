const router = require("express").Router()
const AuthController = require("./admin")
const AdminRouter = require("./admin")
const KycValidationRouter = require("./user")

router.use(AuthController)
router.use(AdminRouter)
router.use(KycValidationRouter)

module.exports = router