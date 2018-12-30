var express =  require('express');
var router = express.Router();
var trainer = require("./data/trainer.js");
var course = require("./data/course.js");
var fodder = require("./data/fodder.js");
var part = require("./data/part.js");
var apparatus = require("./data/apparatus.js");
var difficulty = require("./data/difficulty.js");

router.get("/trainer",function(req,res){
  res.send(trainer)
})

router.get("/course",function(req,res){
  res.send(course)
})

router.get("/fodder",function(req,res){
  res.send(fodder)
})

router.get("/part",function(req,res){
  res.send(part)
})

router.get("/apparatus",function(req,res){
  res.send(apparatus)
})

router.get("/difficulty",function(req,res){
  res.send(difficulty)
})


module.exports = router;
