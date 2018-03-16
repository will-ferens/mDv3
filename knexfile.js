// Update with your config settings.
require('dotenv').load()
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/memory3'
  },

  production: {
    client: 'postgresql',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }

};
