const { Sequelize } = require('sequelize');

const connStr = 'postgres://[user]:[pass]@[host]:[port]/[db]'
const sequelize = new Sequelize(connStr);

module.exports = {
    sequelize: sequelize
}