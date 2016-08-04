var mongoose = require('mongoose')

module.exports = mongoose.model('Comment', {
  detail: { type: String, default: '' },
  by: { type: String, default: '' },
  tags: { type: String, default: '' }
})
