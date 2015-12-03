var express = require('express');
var router = express.Router();
var userdata = require('../data/userjson');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', {userlist: userdata.userlist});
  res.json({userlist: userdata.userlist});
});

router.get('/zhengwen', function(req, res, next) {
	
  res.render('zhengwen', {});
});

module.exports = router;
