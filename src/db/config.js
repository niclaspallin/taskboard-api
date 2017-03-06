export default {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'npalli',
      password: 'secret',
      database: 'taskboard'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};