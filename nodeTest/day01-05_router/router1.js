var http = require('http')
var url = require('url')

http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html;charset=utf-8'})
    if(res.url !== '/favicon.ico'){
        var pathName = url.parse(req.url).pathname
        console.log(pathName)
    }
    res.end()
}).listen(8080)

console.log('server is open...')

