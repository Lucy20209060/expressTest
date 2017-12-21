# 方法的定义
def abs(x):
	if x >= 0:
		return x
	else:
		return -x

# 调用方法 或 在其他文件中调用
# print(abs(-45))

# pass语句什么都不做 占位符 比如还没想好怎么写这块的函数代码 就先放一个pass 让函数先跑起来
def fun2(age):
	if age >= 18:
		pass
	else:
		print('人家还小呢')


# 函数式编程的一个特点就是，允许把函数本身作为参数传入另一个函数，还允许返回一个函数！


# 高阶函数 一个函数可以接收另一个函数作为参数 这种函数就是高阶函数
def add(num1,num2,fun):
	return fun(num1) + fun(num2)
# 将abs作为参数传递
print(add(-5,6,abs))

L1 = ['adam', 'LISA', 'barT']
L2 = list(map(normalize, L1))
print(L2)