const http = require('http');
// 导入自定义方法
const fun = require('./function')

http.createServer((request,response) => {
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	console.log('hello world22');
	response.write('hello world22');
	// 使用自定义方法
	fun.write(response)
	response.write(fun.add('12','45'))
	response.end();
}).listen(3000);
