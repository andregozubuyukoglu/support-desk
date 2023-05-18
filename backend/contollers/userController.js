const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")

const User = require("../models/userModel")

// @desc Registe a new user
// @route /api/users
// @access Public
const registerUser = asyncHandler(async function (req, res) {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    throw new Error("Provide all info")
  }

  //Find the user exists in the database
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error("User already exists")
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new error("Invalid user data")
  }
})

// @desc Login user
// @route /api/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login Route")
})

module.exports = { registerUser, loginUser }
