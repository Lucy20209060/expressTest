# 循环
for x in range(1,11):
	print(x)

# 双层循环
li = [m + n for m in 'ABC' for n in 'XYZ']
print(li)		 # ['AX', 'AY', 'AZ', 'BX', 'BY', 'BZ', 'CX', 'CY', 'CZ']


# 导入os模块
import os
# os.listdir可以列出文件和目录
li2 = [d for d in os.listdir('.')]
print(li2)			# ['for.py', 'fun.py', 'set.py', '__pycache__']

# 循环的同时 做相应的处理
d = {'x': 'A', 'y': 'B', 'z': 'C' }
li3 = [k + '=' + v for k, v in d.items()]
print(li3)			# ['x=A', 'y=B', 'z=C']

L = ['Hello', 'World', 'IBM', 'Apple']
li4 = [s.lower() for s in L]
print(li4) 			# ['hello', 'world', 'ibm', 'apple']