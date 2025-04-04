require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
module.exports = {
  development: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || '12345678',
    database: process.env.DB_NAME || 'event_locator_db',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    dialectOptions: {
      application_name: "event-locator-app"
    }
  },
  test: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || '12345678',
    database: process.env.DB_TEST_NAME || 'event_locator_test_db',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
