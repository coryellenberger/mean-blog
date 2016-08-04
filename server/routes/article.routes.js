// server/routes/article.routes.js

var Article = require('./../models/article')
var _ = require('lodash')

module.exports = function (app) {
  app.route('/api/article')
    .get(function (req, res) {
      // use mongoose to get all articles in the database
      Article.find(function (err, articles) {
        // if there is an error retrieving, send the error.
        // nothing after res.send(err) will execute
        if (err) {
          res.send(err)
          return
        }

        console.log('Get /api/article')

        res.json(articles) // return all articles in JSON format
      })
    })
    .post(function (req, res) {
      console.log('Post /api/article')

      Article.findById(req.body._id)
        .exec(function (err, article) {
          // if there is an error retrieving, send the error.
          // nothing after res.send(err) will execute
          if (err) {
            res.send(err)
            return
          }

          if (article) {
            _.assignIn(article, req.body)

            article.save(function (err) {
              if (err) {
                res.send(err)
                return
              }

              console.log('Article Updated', article._id)
              res.json(article)
            })

            return
          }

          var newArticle = new Article(req.body)

          newArticle.save(function (err) {
            if (err) {
              res.send(err)
              return
            }

            console.log('Article Inserted', newArticle._id)
            res.json(newArticle)
          })
        })
    })

  app.route('/api/article/:id')
    .get(function (req, res) {
      Article.findById(req.params.id)
        .exec(function (err, article) {
          // if there is an error retrieving, send the error.
          // nothing after res.send(err) will execute
          if (err) {
            res.send(err)
            return
          }

          console.log('Get /api/article/:id' + req.params.id)

          res.json(article)
        })
    })
    .delete(function (req, res) {
      console.log('Delete /api/article/:id' + req.params.id)
      Article.findById(req.params.id)
        .remove(function (err) {
          if (err) {
            res.send(err)
            return
          }

          res.json(req.params.id)
        })
    })
}
