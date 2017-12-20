const http = require('http');
const fun = require('./function')

console.log(fun)

http.createServer((request,response) => {
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	console.log('hello world22');
	response.write('hello world22');
	fun.write(response)
	response.write(fun.add('12','45'))
	response.end();
}).listen(3000);
