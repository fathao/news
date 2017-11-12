const url = "https://www.nytimes.com/section/technology?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=Tech&WT.nav=page";

app.get("/scrape", function (req, res) {
  // Make a request for the news section of ycombinator
  var process = function (articles) {
    articles.forEach(article => {
      saveArticle(article);
    });

    res.send("Scrape Complete");
  };

  getArticles(url, process);
  console.log("yoy");


  // Send a "Scrape Complete" message to the browser
  
});

const request = require( 'request');
const cheerio = require( 'cheerio');



function getArticles(url, callback) {
  request(url, function processRequest(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);

    const articles = [];
    $(".headline a").each(function (i, element) {

      var title = $(element).text().trim();
      var link = $(element).attr("href");

      // If this found element had both a title and a link
      articles.push({ title, link });
    });

    callback(articles);
  });
}



function saveArticle(article) {
  const { title, link } = article;
  // var title = article.title;
  // var link = article.link;

  if (title && link) {
    // Insert the data in the scrapedData db
    db.scrapedData.insert({
      title: title,
      link: link
    },
      function (err, inserted) {
        if (err) {
          // Log the error if one is encountered during the query
          console.log(err);
        } else {
          // Otherwise, log the inserted datar
          console.log(inserted);
        }
      });
  }
}


