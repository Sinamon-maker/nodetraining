const Joi = require('joi')

const schema = Joi.object().keys({
  filter: Joi.string().alphanum().min(1).max(30),
  page: Joi.number().min(1).max(255),
  sortBy: Joi.string().valid('salary', 'age'),
  order: Joi.string().valid('asc', 'desc'),
})

function validateQueryParams(params) {
  const { error } = schema.validate(params, { abortEarly: false })

  return error
}

module.exports = validateQueryParams
