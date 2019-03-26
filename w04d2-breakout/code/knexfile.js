module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      password: 'postgres',
      database: 'oscars',
      host: 'postgres',
      port: 5432
    }
  },
  production: {
    client: 'pg',
    connection: {
      user: 'postgres',
      password: 'postgres',
      database: 'oscars',
      host: 'postgres',
      port: 5432
    }

  }
};
