var file = require('./file')
var url = require('url')
var queryString = require('querystring')

module.exports = {
    home:function(req,res){
        file.readFile('./views/home.html',res,req)
    },
    login:function(req,res){
        // 获取表单get数据
        // var urlObj = url.parse(req.url,true).query;
        // console.log(urlObj.email)
        // console.log(urlObj.password)
        // file.readFile('./views/login.html',res,req)

        // 获取表单post数据
        var post = ''
        req.on('data',function(chunk){
            post += chunk
        })
        req.on('end',function(){
            file.postReadFile('./views/login.html',res,req,post)
        })
        
    },
    img:function(req,res){
        file.readImg('../img/lu.jpg',res)
    }
}