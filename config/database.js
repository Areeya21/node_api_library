const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_api_library_db', 'node_api_library', 'bgc0jHkVNz36ydAgzH7KeYHuot6XRDUg', {
host: 'dpg-csgv51ogph6c73bt5gf0-a',
dialect: 'postgres',
});

module.exports = sequelize;