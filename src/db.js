// const knex = require('knex')({
//   client: 'mysql',
//   version: '8.0.17',
//   connection: {
//     host: '127.0.0.1',
//     user: 'root',
//     password: '12345678',
//     database: 'portal',
//   },
// });
// const Knex = require('knex');

// const config = require('./config');

// const {
//   host, user, password, port,
// } = config;
const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: '123456',
    database: 'postgres',
  },
});

// const knex = require('knex')({
//   client: 'pg',
//   connection: {
//     connectionString: process.env.DATABASE_URL,
//     ssl: true,
//   },
// });

module.exports = knex;
