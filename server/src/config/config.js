module.exports = {

  port: 8081,
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root12345',
    database: process.env.DB_NAME || 'bottomDrawerDB',
    options: {
      dialect: process.env.DIALECT || 'mysql'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }

}
