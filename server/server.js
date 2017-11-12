var express = require('express');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cheerio = require("cheerio");
var request = require("request");

var app = express();
var databaseUrl = "scraper";
var collections = ["scrapedData"];
var db = mongoose(databaseUrl, collections);

app.use(bodyParser()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

require("./api/api-routes.js")(app, db);
require("./scraper.js") (app, db);


app.listen(port);
console.log('The magic happens on port ' + port);