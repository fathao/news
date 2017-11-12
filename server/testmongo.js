var mongoose = require('mongoose');
var Article = require('./config/models/article');
var Note = require('./config/models/note');

mongoose.connect('mongodb://127.0.0.1:27017');

// save a new article
// var newArticle = new Article();
// newArticle.title = 'req.body.title';
// newArticle.url = 'req.body.url';
// newArticle.save(function (err, article) {
//   if (err) throw err;
//   console.log({ id: article._id });
// });

// // find one by internal id
// Article.findById('5a07c30456beb9452b9ac6c7', function(err, article) {
//   console.log(article)
// });

// find all
// Article.find({}, function (err, articles) {
//   console.log(articles.map(
//     article => ({ url: article.url, title: article.title })
//   ));
// });

// var newNote = new Note();
// newNote.content = 'im a note';
// newNote.article = ;
// newNote.save(function (err, note) {
//   if (err) throw err;
//   console.log(note);
// // });

// Article.find({}).exec(function (err, res) {
//   const articleId = res[0]._id;
//   var newNote = new Note();
//   newNote.content = 'im a note';
//   newNote.article = articleId;
//   newNote.save(function (err, note) {
//     if (err) throw err;
//     console.log(note);
//   });
// });

// const article = '5a07c30456beb9452b9ac6c7';
// Note.find({ article }, function(err, notes) {
//   console.log(notes);
// });

// Article.find({}).populate('notes').exec(function(err, res) {
//   console.log(res);
// })

Article.find({}).select('title').exec(function (err, articles) {
  console.log(articles);
});
