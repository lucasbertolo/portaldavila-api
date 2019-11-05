const knex = require('knex')({
  client: 'mysql',
  version: '8.0.17',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'portal',
  },
});

module.exports = knex;
