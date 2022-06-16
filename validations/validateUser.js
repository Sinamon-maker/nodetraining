const Joi = require('joi')

const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(50).required(),
  role: Joi.string().valid('admin'),
})

function validateUser(req, res, next) {
  const user = req.body

  const { error } = schema.validate(user,{ abortEarly: false })
  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }
    next()
}

module.exports = validateUser
