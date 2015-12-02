var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '登陆' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: '注册' });
});

router.get('/forget', function(req, res, next) {
  res.render('forget', { title: '忘记密码' });
});

module.exports = router;
