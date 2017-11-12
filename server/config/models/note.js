var mongoose = require('mongoose');

var noteSchema = mongoose.Schema({
  content: String,
  article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' }
});

module.exports = mongoose.model("Note", noteSchema);
