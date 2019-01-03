const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
const db = require('./db/database');
const session = require('express-session');
const passport = require('passport');

const app = express();

let imgpath = '../public/lifting-a-dreamer.jpg';
//logging middleware
app.use(morgan('dev'));

//parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// configure and create our database store
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dbStore = new SequelizeStore({db: db});

// sync so that our session table gets created
dbStore.sync();

//session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
    resave: false,
    store: dbStore,
    saveUninitialized: false
  })
);

//passport initializing
app.use(passport.initialize());
app.use(passport.session());

// static middleware
app.use(express.static(path.join(__dirname, '../public')));

//api routes
app.use('/api', require('./api'));

// authentication router
app.use('/authentication', require('./auth'));

// Send index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// error handling middleware
app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.set('Content-Type', 'image/jpg');
  res
    .status(err.status || 500)
    .send(
      err.message || ('Internal server error.' && fs.readFileSync(imgpath))
    );
});

//listening the port
app.listen(port, function() {
  console.log('Knock, knock');
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});

module.exports = app;
