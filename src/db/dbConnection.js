const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const process = require('process');
dotenv.config();
const DB_HOST = process.env.DB_HOST;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  logging: false
});

(async() => {
  try {
    await sequelize.sync();
    console.log('Table created successfully.');
  } catch (error) {
    console.error('Error creating table:', error);
  }
})();

module.exports = sequelize;
