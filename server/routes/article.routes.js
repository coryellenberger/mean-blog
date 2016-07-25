// server/routes/article.routes.js

var Article = require('./../models/article');
var _       = require('lodash');

module.exports = function(app) {

  app.get('/api/articles', function(req, res) {
    // use mongoose to get all articles in the database
    Article.find(function(err, articles) {
      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }

      console.log('/api/articles');

      res.json(articles); // return all articles in JSON format
    });
  });

  app.route('/api/article/:id')
    .get(function(req, res) {
      Article.findById(req.params.id)
        .exec(function(err, article) {
          // if there is an error retrieving, send the error.
          // nothing after res.send(err) will execute
          if (err) {
            res.send(err);
          }

          console.log('/api/article/' + req.params.id);

          res.json(article);
        });
    })
    .post(function(req, res) {
      Article.findById(req.params.id)
        .exec(function(err, article) {
          // if there is an error retrieving, send the error.
          // nothing after res.send(err) will execute
          if (err) {
            res.send(err);
          }

          if (article) {
            _.assignIn(article, req.body);

            article.save(function(err) {
              if (err) {
                res.send(err);
              }

              console.log('Article Updated', article._id);
              res.json(article);
            });

            return;
          }

          var newArticle = new Article(req.body);

          newArticle.save(function(err) {
            if (err) {
              res.send(err);
            }

            console.log('Article Inserted', newArticle._id);
            res.json(newArticle);
          });
        });
    })
    .delete(function(req, res) {

    });

};
