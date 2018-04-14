var express = require('express');
var router = express.Router();

// success
var SUCCESS = {
    status:0,
    success:true
}
// error
var ERROR = {
    status:1,
    success:false
}

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

// 商品信息
router.get('/productDet', function (req, res, next) {
    let productId = req.query.productId

    if(productId === undefined || productId === ''){
        res.json(
            Object.assign(
                {
                    msg:'商品ID为空'
                },
                ERROR
            )
        )
    }else{
        res.json(
            Object.assign(
                {
                    msg: '成功',
                    id: productId,
                    name:'临安小番薯500g*3甜在心头',
                    data:{
                        a:1,
                        b:2,
                        c:3
                    }
                },
                SUCCESS
            )
        )
    }
    
})
module.exports = router;
