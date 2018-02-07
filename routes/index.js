var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'indexPage' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '登陆页' });
});

module.exports = router;
