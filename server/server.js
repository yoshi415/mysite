var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static('client'));

module.exports = app;