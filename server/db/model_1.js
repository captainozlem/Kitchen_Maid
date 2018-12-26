// this model is just a generic example change it based on your project in the future

const Sequelize = require('sequelize');
const db = require('./database');

const Model1 = db.define('model_1', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0,
      max: 100
    },
    defaultValue: 0
  }
});

module.exports = Model1;
