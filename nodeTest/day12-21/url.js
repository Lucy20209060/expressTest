// const url = require('url');
// const myURL = url.parse('http:///www.baidu.com:8080/api.php?from=qianfeng&couse=node#level1');

// const query = myURL.query;                  // from=qianfeng&couse=node
// const pathname = myURL.pathname;            // /www.baidu.com:8080/api.php   

// console.log(pathname)                 

const { URL } = require('url');
const myURL = new URL('/foo', 'https://example.org/');
console.log(myURL)

// URL {
//     href: 'https://example.org/foo',
//     origin: 'https://example.org',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'example.org',
//     hostname: 'example.org',
//     port: '',
//     pathname: '/foo',
//     search: '',
//     searchParams: URLSearchParams {},
//     hash: '' }

console.log(myURL.host)