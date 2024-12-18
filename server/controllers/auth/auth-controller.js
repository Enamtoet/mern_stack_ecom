const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../modals/user')

// register

const registerUser = async (req, res) => {
  const { userName, email, password } = req.body
  try {
    const checkUser = await User.findOne({ email })
    if (checkUser)
      return res.json({
        success: false,
        message: 'User is already exist with the same email! please try again',
      })

    const hashPassord = await bcrypt.hash(password, 12)
    const newUser = new User({
      userName,
      email,
      password: hashPassord,
    })
    await newUser.save()
    res.status(200).json({
      success: true,
      message: 'Registration is successful',
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Some Error occured',
    })
  }
}

// login

const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const checkUser = await User.findOne({ email })

    if (!checkUser) {
      return res.json({
        success: false,
        message: "User doesn't not exist please register first",
      })
    }

    const checkPasswordMatch = await bcrypt.compare(
      password,
      checkUser.password
    )
    if (!checkPasswordMatch) {
      return res.json({
        success: false,
        message: 'Incorrect password! Please try again ',
      })
    }
    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
      },
      'CLIENT_SECRET_KEY',
      { expiresIn: '60m' }
    )
    res.cookie('token', token, { httpOnly: true, secure: false }).json({
      success: true,
      message: 'Logged in successfully',
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser._id,
      },
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Some Error occured',
    })
  }
}

// logOut

const logoutUser = (req, res) => {
  res.clearCookie('token').json({
    success: true,
    message: 'Logged out successfully ',
  })
}

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token
  if (!token)
    return res.status(401).json({
      success: false,
      message: 'Unauthorized user',
    })

  try {
    const decoded = jwt.verify(token, 'CLIENT_SECRET_KEY')
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Unauthorized user',
    })
  }
}

module.exports = { registerUser, loginUser, logoutUser, authMiddleware }
