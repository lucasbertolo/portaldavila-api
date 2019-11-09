const knex = require('knex')({
  client: 'mysql',
  version: '8.0.17',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '12345678',
    database: 'portal',
  },
});

module.exports = knex;
