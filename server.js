var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var request = require("request");

var PORT = process.env.PORT || 8080;


var app = express();

app.use(logger("dev"));
app.use(express.static("public"));



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// var router = require('./controllers/controller.js');
// app.use('/', router);

var routes = require('./controllers/controller');
app.use('/', routes);


mongoose.connect("mongodb://localhost/NewsScraper");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  