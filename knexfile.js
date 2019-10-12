// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'cuppedcoffee',
      user:     require('os').userInfo().username,
      password: ''
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds`
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
