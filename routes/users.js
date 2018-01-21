var express = require('express');
var router = express.Router();

/* GET users page. */
router.get('/', function(req, res, next) {
    res.render('users', { title: 'usersPage',friends:1 });
});
// /users/list
router.get('/list', function(req, res, next) {
    res.send('list');
});

// /users/ab*****ut 模糊匹配
router.get('/ab*ut',function(req,res,next){
    res.send('模糊匹配')
})
module.exports = router;