const db = require('knex')({
  client: 'mysql',
  version: '5.7',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'portal',
  },
});

module.exports = db;
