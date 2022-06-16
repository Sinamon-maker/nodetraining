

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      database: 'sql_employees',
      user:     'root',
      password: 'password',

    },
    seeds: {
    directory: '../data'
  },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  test: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      database: 'sql_test_employees',
      user:     'root',
      password: 'password',

    },
    seeds: {
    directory: '../data'
  },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
}

