/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

module.exports = {
  development: {
    url: process.env.DB_URI,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DB_URI,
    dialect: 'postgres',
  },
}
