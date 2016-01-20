var express = require('express');
var app = express();

app.use(express.static('client'));

var port = process.ENV || 3000;
app.listen(port, function() {
  console.log("listening on http://localhost:" + port)
});