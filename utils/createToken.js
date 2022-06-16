const jwt = require('jsonwebtoken')
require('dotenv').config()

const secret = process.env.SECRET_KEY

function createToken(user) {
  const payload = {
    id: user.user_id,
    isAdmin: user.role,  
  }
  const token = jwt.sign(
    {
      data: payload,
    },
    secret,
    { expiresIn: 60 * 60 },
  )
  return token
}

module.exports = createToken
