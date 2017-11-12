const router = require('express').Router();
const request = require('request');
const cheerio = require('cheerio');

const url = "https://www.nytimes.com/section/technology?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=Tech&WT.nav=page";

router.get("/scrape", function (req, res) {
  request(url, function (error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);

    const articles = [];
    $(".headline a").each(function (i, element) {

      var title = $(element).text().trim();
      var url = $(element).attr("href");

      // If this found element had both a title and a link
      articles.push({ title, url });
    });

    res.json(articles);
  });
});

module.exports = router;
