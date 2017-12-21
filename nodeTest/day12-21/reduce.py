# reduce把一个函数作用在一个序列[x1,x2,x3,x4,...]上,接收两个参数 reduce把结果继续和下一个元素累积计算
# 效果类似于 reduce(f,[x1,x2,x3,x4]) = (f(f(x1,x2),x3),x4)

from functools import reduce
def add(x, y):
	return x + y
	
print(reduce(add, [1, 3, 5, 7, 9]))  # 25