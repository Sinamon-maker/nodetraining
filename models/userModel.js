const knex = require('../db/db-config')

const getAllUsers = async () => {
  const result = await knex('users').select()
  return result
}

const getUserByEmail = async (email) => {
  const result = await knex(`users`).where('email', `${email}`)
  return result
}

const getUserById = async (id) => {
  const result = await knex(`users`).where('user_id', `${id}`)

  return result
}

const addNewUser = async (user) => {
  const data = {
    name: user.name,
    email: user.email,
    password: user.password,
    role: user?.role
  }
  const [resultId] = await knex(`users`).insert(data)

  return resultId
}

module.exports = {
  getAllUsers,
  getUserById,
  addNewUser,
  getUserByEmail,
}
