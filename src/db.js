var knex = require('knex')({
    client: 'mysql',
    version: '5.7',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '12345678',
      database : 'portal'
    }
  });

  module.exports = knex; 