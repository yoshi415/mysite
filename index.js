var app = require('./server');

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
  console.log('Listening on port 3000');
});