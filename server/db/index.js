// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database');
const Model1 = require('./model_1');
const Model2 = require('./model_2');

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)

Model1.belongsToMany(Model2, {through: 'Models'});
Model2.belongsToMany(Model1, {through: 'Models'});

module.exports = {
  // Include your models in this exports object as well!
  db,
  Model1,
  Model2
};
