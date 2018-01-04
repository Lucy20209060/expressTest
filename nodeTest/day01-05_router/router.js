var file = require('./file')

module.exports = {
    home:function(req,res){
        res.write('首页')
    },
    login:function(req,res){
        res.write('登录页')
    },
    img:function(req,res){
        file.readImg('../img/lu.jpg',res)
    }
}