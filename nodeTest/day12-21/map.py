# map()函数接收两个参数 一个是函数 一个是Iterable 
# map将传入的函数依次作用到序列的每一个元素 并把结果作为新的Iterator返回
def f(x):
	return x*x

r = map(f,[1,2,3,4,5,6])
print(list(r))				# [1, 4, 9, 16, 25, 36]
# list(map(f,[1,2,3,4,5,6]))

# int字符串转化为整数
print(int('12'))