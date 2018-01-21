var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'indexPage' });
});

/* GET users page. */
// router.get('/users', function(req, res, next) {
//   res.render('users', { title: 'usersPage',friends:1 });
// });

module.exports = router;
