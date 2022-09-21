var express = require('express');
var router = express.Router(); 

var pool = require('../db/database');

/* GET home page. */
router.get('/', function(req, res, next) {
	
	res.render('index', { title: "Rohan Panchal's HW3" });
});

module.exports = router;
