const express = require('express')
require('dotenv').config()
const bcrypt = require('bcrypt')

var router = express.Router()

const validateUser = require('../validations/validateUser')
const createToken = require('../utils/createToken')


const userController = require('../controllers/userController')

router.get('/', async (req, res) => {

  const users = await userController.getAllUsers()
  return res.json({ data: users })
})

router.post('/login', validateUser, async (req, res) => {
  const user = req.body

  const userInDb = await userController.getUserByEmail(user.email)
  if (!userInDb.length) {
    return res.status(401).json({ error: 'Bad cridentials' })
  }

  const match = await bcrypt.compare(user.password, userInDb[0].password)
  if (!match) {
    return res.status(401).json({ error: 'Bad cridentials' })
  }

  const token = createToken(userInDb[0])
  return res.status(201).json({ data: token })
})

router.post('/register', validateUser, async (req, res) => {
  const user = req.body

  const result = await userController.getUserByEmail(user.email)
  if (result.length) {
    return res
      .status(400)
      .json({ error: 'User with the given email already exists' })
  }

  const newUser = await userController.createNewUser(user)
  const token = createToken(newUser)
  return res.status(201).json({ data: token })
})

module.exports = router
