const asyncHandler = require("express-async-handler")

// @desc Registe a new user
// @route /api/users
// @access Public
const registerUser = asyncHandler(async function (req, res) {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    throw new Error("Provide all info")
  }

  res.send("Register Route")
})

// @desc Login user
// @route /api/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login Route")
})

module.exports = { registerUser, loginUser }
