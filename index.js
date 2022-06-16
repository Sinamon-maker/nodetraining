const express = require('express')
require('express-async-errors')
require('dotenv').config()
const bodyParser = require('body-parser')
const  app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const users = require('./routes/users')
const employees = require('./routes/employees')
const departments = require('./routes/departments')
const error = require('./middleware/error')
const logger = require('./logger/logger')

//logger.error(error.message)

app.use('/api/users', users)
app.use('/api/employees', employees)
app.use('/api/departments', departments)

app.use(error)

const port = process.env.PORT || 8800
const server = app.listen(port, function () {
  console.log(`Server started on port ${port}...`)
})

module.exports=server







