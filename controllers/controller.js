// var db = require("../models");
var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');

var router = require("express").Router();

router.get("/", function(req, res){
    res.render("home");
});

module.exports = router;