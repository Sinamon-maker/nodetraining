const bcrypt = require('bcrypt')

const saltRounds = 10

const userModel = require('../models/userModel')

const getAllUsers = async() => {
   const users = await userModel.getAllUsers()
   return users
}

const createNewUser = async (user) => {
  console.log('controller', user)
  const hashedPassword = await bcrypt.hash(user.password, saltRounds)
user.password=hashedPassword
  const userId = await userModel.addNewUser(user)
  const newUser = await userModel.getUserById(userId)

  return newUser
}

const getUserByEmail = async (email) => {
  return await userModel.getUserByEmail(email)
}

module.exports = {
  createNewUser,
  getUserByEmail,
  getAllUsers,
}
