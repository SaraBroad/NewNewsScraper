// var Note = require('../models/Note.js');
// var Article = require('../models/Article.js');
var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {

    delete: function(req, res) {
        db.Article.remove({ _id: req.params.id }).then(function(dbArticle) {
          res.json(dbArticle);
        });
      }



    }

    // app.get("/", function (req, res) {
    //     // db.article.find
    //     //
    //     res.render("home");
    // });

  
    
//     app.get("/articles", function (req, res) {
//         db.Article.find({}, function (error, found) {
//             if (error) {
//                 console.log(error)
//             } else {
//                 var hbsArticleObject = {
//                     article: found
//                 }
//                 // res.render("home", hbsArticlesObject);
//             }
//         });
//         res.render("saved", hbsArticleObject)
//     });

//     app.get("/articles/:id", function (req, res) {
//         // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
//         db.Article.findOne({ _id: req.params.id })
//             // ..and populate all of the notes associated with it
//             .populate("note")
//             .then(function (dbArticle) {
//                 // If we were able to successfully find an Article with the given id, send it back to the client
//                 res.json(dbArticle);
//             })
//             .catch(function (err) {
//                 // If an error occurred, send it to the client
//                 res.json(err);
//             });
//     });


//     app.post("/articles/:id", function (req, res) {
//         db.Note.create(req.body)
//             .then(function (dbNote) {
//                 return db.Article.findOneAndUpdate({}, { $push: { notes: dbNote._id } }, { new: true })
//             })
//             .then(function (dbArticle) {
//                 res.json(dbArticle)
//             })
//             .catch(function (err) {
//                 res.json(err);
//             });
//     });

//     app.get("/delete/:id", function (req, res) {
//         db.Note.findOneAndRemove({ "_id": req.params.id }, function (err, remove) {
//             if (err) {
//                 console.log("Article removal error")
//             } else {
//                 console.log("Article removed successfully")
//             }
//         });
//     });
// };


