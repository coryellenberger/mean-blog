// server.js

// modules =================================================
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var mongoose        = require('mongoose');
var config          = require('./config'); // get our config file

// configuration ===========================================

// set our port
var port = process.env.PORT || 3000;

/**
 * Connect to database
 */
mongoose.connect(config.databaseUrl, function (err) {
  if (err) {
    console.error(err);
    process.exit(1);
    return;
  }

  console.info('Connected successfully');
});

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ==================================================
require('./server/routes/setup')(app, function() {
  // capture all / routes
  app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });
}); // configure our routes

// start app ===============================================
// startup our app at http://localhost:3000
app.listen(port);

// shoutout to the user
console.log('listening on port ' + port);

// expose app
exports = module.exports = app;