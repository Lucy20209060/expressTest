const http = require('http');

http.createServer((request,response) => {
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	console.log('hello world22');
	response.write('hello world22');
	response.end();
}).listen(3000);
