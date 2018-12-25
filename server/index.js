const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//logging middleware
app.use(morgan('dev'));

// static middleware
app.use(express.static(path.join(__dirname, '../public')));

//parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
