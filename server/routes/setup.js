// server/routes/setup.js

module.exports = function(app) {

  require('./article.routes')(app); // configure our routes

  // capture all / routes
  app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });

};
