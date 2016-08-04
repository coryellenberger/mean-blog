var Comment = require('./../models/comment')
var _ = require('lodash')

module.exports = function (app) {
  app.get('/api/comments', function (req, res) {
    // use mongoose to get all comments in the database
    Comment.find(function (err, comments) {
      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err) {
        res.send(err)
        return
      }

      console.log('Get /api/comments')

      res.json(comments) // return all comments in JSON format
    })
  })

  app.route('/api/comment/:id')
    .get(function (req, res) {
      Comment.findById(req.params.id)
        .exec(function (err, comment) {
          // if there is an error retrieving, send the error.
          // nothing after res.send(err) will execute
          if (err) {
            res.send(err)
            return
          }

          console.log('Get /api/comment/' + req.params.id)

          res.json(comment)
        })
    })
    .delete(function (req, res) {
      console.log('Delete /api/comment/' + req.params.id)
      Comment.findById(req.params.id)
        .remove(function (err) {
          if (err) {
            res.send(err)
            return
          }

          res.json(req.params.id)
        })
    })

  app.route('/api/comment')
    .post(function (req, res) {
      console.log('Post /api/comment')

      Comment.findById(req.body._id)
        .exec(function (err, comment) {
          // if there is an error retrieving, send the error.
          // nothing after res.send(err) will execute
          if (err) {
            res.send(err)
            return
          }

          if (comment) {
            _.assignIn(comment, req.body)

            comment.save(function (err) {
              if (err) {
                res.send(err)
                return
              }

              console.log('Comment Updated', comment._id)
              res.json(comment)
            })

            return
          }

          var newComment = new Comment(req.body)

          newComment.save(function (err) {
            if (err) {
              res.send(err)
              return
            }

            console.log('Comment Inserted', newComment._id)
            res.json(newComment)
          })
        })
    })
}
