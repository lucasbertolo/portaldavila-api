const config = {};

config.host = '127.0.0.1';
config.user = 'postgres';
config.password = process.env.DBKEY;
config.port = 5464;
// config.database = 'public';

module.exports = config;
