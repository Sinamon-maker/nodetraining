const mysql = require('mysql2/promise')

  const connection =  mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'sql_employees',
  password: 'password',

})

module.exports = connection


