// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database');
//const User = require('./user');
const GroceryList = require('./grocery');
//const Recipes = require('./recipes');

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)

// GroceryList.belongsToMany(Recipes, {through: 'DesiredItem'});
//Recipes.belongsToMany(GroceryList, {through: 'DesiredItem'});

//GroceryList.hasMany(User, {as: 'customer'});

// User.hasMany(Recipes);
// Recipes.hasMany(User);

module.exports = {
  // Include your models in this exports object as well!
  db,
  //User,
  GroceryList
  //Recipes
};
