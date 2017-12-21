// querystring 用于解析与格式化URT查询字符串
const querystring = require('querystring');

// 给定的str进行URL编码
const str = querystring.escape('foo=bar&abc=xyz&abc=123')
console.log(str)

const tem = querystring.parse('foo=bar&abc=xyz&abc=123')
console.log(tem)
// { foo: 'bar', abc: [ 'xyz', '123' ] }