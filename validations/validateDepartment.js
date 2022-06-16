const Joi = require('joi')

const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(50).required(),
})

function validateDepartment(req, res, next) {
  const department = req.body

  const { error } = schema.validate(department, { abortEarly: false })
  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }
  return next()
}

module.exports = validateDepartment