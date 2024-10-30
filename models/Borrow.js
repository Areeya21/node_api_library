const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Book = require('./Book');

const Borrow = sequelize.define('Borrow', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    allowNull: false,
  },
  book_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Book,
      key: 'id',
    },
    allowNull: false,
  },
  borrow_date: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  tableName: 'borrows',
});

module.exports = Borrow;
