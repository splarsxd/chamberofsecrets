const userController = require("../controllers/userControllers")
const {Router} = require("express")
const router = new Router()

// REQUESTS
router.post("/login", userController.login)

router.get("/me", userController.info)
router.patch("/me", userController.resetpassword)

router.get("/generate", userController.generate)

module.exports = router