var router = require("express").Router;
var controllerFunctions = require("../controllers");

  router.get("/", function(req, res){
    res.render("home");
  });

  router.get("/saved", function(req, res){
      res.render("saved");
  })

module.exports = router;
