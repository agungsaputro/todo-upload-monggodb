//var express = require('express');
//var router = express.Router();
//var upload = require('./upload');
//var mangoose = require('mangoose');
//var photo = mangoose.model('Photos');

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'home' });
//});

//module.exports = router;

exports.index = function(req, res){
  res.render('index', { title: 'Home' });
};

