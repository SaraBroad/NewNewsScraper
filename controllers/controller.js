var db = require("../models");
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
var router = require("express").Router();
var axios = require("axios");

module.exports = function (app) {

    app.get("/", function (req, res) {
        // db.article.find
        //
        res.render("home");
    });

    app.get("/scrape", function (req, res) {
        axios.get("https://www.bbc.com").then(function (response) {
            var $ = cheerio.load(response.data);
            $(".media__content").each(function (i, element) {
                var result = {};
                result.title = ("Title: " + $(element).children('h3').children("a").text());
                result.link = ("Link: " + $(element).children("h3").children("a").attr("href"));
                result.summary = ("Summary: " + $(element).children("p").text());
                console.log(result);

                db.Article.create(result)
                    .then(function (dbArticle) {
                        console.log(dbArticle)
                        var hbsArticlesObject = {
                            article: result
                        };
                    }).catch(function (err) {
                        console.log(err);
                    });
            });

            // res.render("home", hbsArticlesObject);
            res.json({});
        })
    })




    
    app.get("/articles", function (req, res) {
        db.Article.find({}, function (error, found) {
            if (error) {
                console.log(error)
            } else {
                var hbsArticleObject = {
                    article: found
                }
                res.render("home", hbsArticlesObject);
            }
        });
    });

    app.get("/articles/:id", function (req, res) {
        // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
        db.Article.findOne({ _id: req.params.id })
            // ..and populate all of the notes associated with it
            .populate("note")
            .then(function (dbArticle) {
                // If we were able to successfully find an Article with the given id, send it back to the client
                res.json(dbArticle);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    });


    app.post("/articles/:id", function (req, res) {
        db.Note.create(req.body)
            .then(function (dbNote) {
                return db.Article.findOneAndUpdate({}, { $push: { notes: dbNote._id } }, { new: true })
            })
            .then(function (dbArticle) {
                res.json(dbArticle)
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.get("/delete/:id", function (req, res) {
        Note.findOneAndRemove({ "_id": req.params.id }, function (err, remove) {
            if (err) {
                console.log("Article removal error")
            } else {
                console.log("Article removed successfully")
            }
        });
    });
};
