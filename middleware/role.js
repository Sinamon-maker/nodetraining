const jwt = require('jsonwebtoken')
require('dotenv').config()

function authenticateRole(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: err.message })
    console.log(user.data)
    if (!user.data.isAdmin) {
      return res
        .status(403)
        .json({ error: 'You are not allowed to delete action' })
    }
    req.user = user

    next()
  })
}

module.exports = authenticateRole
