const Joi = require('joi')

const schema = Joi.object({
  firstName: Joi.string().alphanum().min(3).max(30).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  age: Joi.string().required(),
  salary: Joi.number().min(5).max(200000).required(),
  age: Joi.date().timestamp().required(),
  dateStart: Joi.date().timestamp().required(),
  department: Joi.number().min(1).max(500).required(),
  jobTitle: Joi.string().min(3).max(30).required(),
  dateQuit: Joi.date().timestamp(),
  employeeId: Joi.number().min(5).max(500),
})


function validateEmploee(req, res, next) {
  const emploee = req.body

  const { error } = schema.validate(emploee, { abortEarly: false })
  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }
  return next()
}

module.exports = validateEmploee
