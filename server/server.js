var express = require('express');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cheerio = require("cheerio");
var request = require("request");
var router = require('./api');

var app = express();
// var databaseUrl = "scraper";
// var collections = ["scrapedData"];

app.use('/api', router);

mongoose.connect('mongodb://127.0.0.1:27017');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});



app.use(bodyParser()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

require("./api/articles");
require('./api/notes');
require("./api/scraper.js");


app.listen(port);
console.log('The magic happens on port ' + port);
