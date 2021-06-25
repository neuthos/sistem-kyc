const router = require("express").Router()
const AuthRouter = require("./auth")
const AdminRouter = require("./admin")
const KycValidationRouter = require("./user")

router.use(AuthRouter)
router.use(AdminRouter)
router.use(KycValidationRouter)

module.exports = router