const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Habit = sequelize.define('Habit', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  frequency: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Habit;
