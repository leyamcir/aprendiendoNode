var express = require('express');
var router = express.Router();
var add = require('../lib/add');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', add: add(3,4)});
});

module.exports = router;
