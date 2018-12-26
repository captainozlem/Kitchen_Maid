const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/this_is_my_app',
  {
    logging: false // unless you like the logs
    // ...and there are many other options you may want to play with
  }
);

//this_is_my_app will change based on your next database name...

module.exports = db;
