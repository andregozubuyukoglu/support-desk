const express = require("express")
const router = express.Router()
const { registerUser, loginUser } = require("../contollers/userController")

router.post("/", registerUser)

router.post("/login", loginUser)

module.exports = router
