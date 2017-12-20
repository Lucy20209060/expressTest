exports.write = function(res) {
	res.write('调用方法执行的')
}

exports.add = function(a,b) {
	return a+b;
}