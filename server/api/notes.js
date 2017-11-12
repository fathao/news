const router = require('express').Router();
const Note = require("../config/models/note");

router.get('/notes/:articleid', function(req, res) {
  const { articleid } = req.params;
  Note.find({ article: articleid }, function(err, notes){
    req.json(notes);
  });
});

router.post('/note', function (req, res) {
  const { content, articleid } = req.body;
  var note = new Note();
  note.content = content;
  note.article = articleid;
  note.save(function (err, note) {
    if (err) throw err;
    res.json({ id: note._id });
  });
});

router.delete('note/:id', function (req, res) {
  Note.findById(req.params.id, function (err, note) {
    if (err) throw err;
    note.remove();
  });
});
