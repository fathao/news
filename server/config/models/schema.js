var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  url: String,
  title: String,
  noteTitle: String,
  noteContent: String
});

module.exports = mongoose.model("Article", articleSchema);
