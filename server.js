var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static('client'));

app.get('/djcityextension', function(req, res) {
  res.sendFile(__dirname + '/client/djcity.html');
});

module.exports = app;