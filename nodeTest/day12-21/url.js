const url = require('url');
const myURL = url.parse('http:///www.baidu.com:8080/api.php?from=qianfeng&couse=node#level1');

const query = myURL.query;                  // from=qianfeng&couse=node
const pathname = myURL.pathname;            // /www.baidu.com:8080/api.php   

console.log(pathname)                 