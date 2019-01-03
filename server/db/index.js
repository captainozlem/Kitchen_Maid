// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database');
const User = require('./user');
const GroceryList = require('./grocery');
//const Recipes = require('./recipes');

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)

GroceryList.belongsTo(User);
User.hasOne(GroceryList);

module.exports = {
  // Include your models in this exports object as well!
  db,
  User,
  GroceryList
  //Recipes
};
