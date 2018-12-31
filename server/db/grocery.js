const Sequelize = require('sequelize');
const db = require('./database');

const GroceryList = db.define('grocery', {
  item: {
    type: Sequelize.STRING,
    allowNull: false
  },
  amount: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0,
      max: 1000
    },
    defaultValue: 0
  },
  unit: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'lbs'
  }
});

module.exports = GroceryList;
