// this model is just a generic example change it based on your project in the future

const Sequelize = require('sequelize');
const db = require('./database');

const Model2 = db.define('model_2', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Model2;
