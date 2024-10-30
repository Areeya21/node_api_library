const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Borrow = require('./Borrow');

const Return = sequelize.define('Return', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  borrow_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Borrow,
      key: 'id',
    },
    allowNull: false,
  },
  return_date: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  tableName: 'returns',
});

module.exports = Return;
