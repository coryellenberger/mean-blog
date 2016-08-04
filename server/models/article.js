var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = mongoose.model('Article', {
  title: { type: String, default: '' },
  detail: { type: String, default: '' },
  by: { type: String, default: '' },
  tags: { type: String, default: '' },
  comments: [ { type: Schema.Types.ObjectId, ref: 'Comment' } ]
})
