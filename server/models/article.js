// server/models/article.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Article', {
  title: { type: String, default: '' },
  detail: { type: String, default: '' },
  by: { type: String, default: '' },
  tags: { type: String, default: '' }
});