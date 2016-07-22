// server/routes/article.routes.js

var Article = require('./../models/article');

module.exports = function(app) {

  app.get('/api/article', function(req, res) {
    res.json([{
      name: 'Best blog',
      details: 'Well I wrote this entire blog in one day'
    }, {
      name: 'Another blog',
      details: 'Well I wrote this one in two days'
    }]);

    /*// use mongoose to get all articles in the database
    Article.find(function(err, articles) {
      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }

      console.log(articles);

      res.json(articles); // return all articles in JSON format
    });*/
  });

  app.route('/api/article')
    .post(function (req, res) {

    })
    .delete(function (req, res) {

    });

};
