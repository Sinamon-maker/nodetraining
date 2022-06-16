const knexConfig = require('./knex')
const knex = require('knex')


let db = null
if (process.env.NODE_ENV === "test") {
  db = knex(knexConfig.test)
} else {
  db = knex(knexConfig.development)
}

module.exports = db