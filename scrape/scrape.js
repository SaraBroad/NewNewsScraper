var cheerio = require('cheerio');
var axios = require('axios');


//old function
//   app.get("/scrape", function (req, res) {
//         axios.get("https://www.bbc.com").then(function (response) {
//             var $ = cheerio.load(response.data);
//             $(".media__content").each(function (i, element) {
//                 var result = {};
//                 result.title = ("Title: " + $(element).children('h3').children("a").text());
//                 result.link = ("Link: " + $(element).children("h3").children("a").attr("href"));
//                 result.summary = ("Summary: " + $(element).children("p").text());
//                 console.log(result);
//                 var article = new db.Article()
//                 db.Article.create(result)
            
//                     .then(function (dbArticle) {
//                         console.log(dbArticle)
//                         var hbsArticlesObject = {
//                             article: result
//                         };
//                     }).catch(function (err) {
//                         console.log(err);
//                     });
//             });
//             res.render("home", hbsArticlesObject);
//             // res.json({});
//         });
//     });


//updating function

var scrape = function() {
    return axios.get("https://www.bbc.com").then(function (response) {
        var $ = cheerio.load(response.data);
        var articles = [];
        $(".media__content").each(function (i, element) {
            var title = $(this).children('h3').children("a").text();
            var link = $(this).children("h3").children("a").attr("href")
            var summary = $(this).children("p").text()
            console.log(result);
            if (title && link && sum) {
                var titleDiv = title.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var summaryDiv = summary.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                var hbsData = {
                    titleDiv,
                    summaryDiv,
                    link
                };
                articles.push(hbsData);
            }
        });
        return articles;
    });
};