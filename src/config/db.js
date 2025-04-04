const { Sequelize } = require('sequelize');
const config = require('../../config/config'); 

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        application_name: "event-locator-app"
    }
});

sequelize.authenticate()
    .then(() => console.log('✅ PostgreSQL & PostGIS connected...'))
    .catch(err => console.error('❌ Error connecting to DB:', err));

module.exports = sequelize;
