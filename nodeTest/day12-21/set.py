# in查询元素是否在列表中
names = ['a','b','c','d']
print('a' in names)


name = {
	'a':11,
	'b':22,
	'c':33,
	'd':44
}
# 存在时 返回对应的值
# 不存在返回None
sign = name.get('e')
print(sign) 				# None

# 不存在时返回自定义的值
sign2 = name.get('e',-1)
print(sign2) 				# -1

s = set([1,2,3,4])
print(s)					# {1, 2, 3, 4}

# 添加元素
s.add(5)
# 删除元素
s.remove(1)
print(s)

s1 = set([1,2,3])
s2 = set([2,3,4])
# 交集 相同的元素集合
print(s1&s2)			# {2, 3}
# 并集 去重后的集合
print(s1|s2)			# {1, 2, 3, 4}

# 可变对象 与 不可变对象
# 对于不可变对象 调用对象自身的任意方法 也不会改变对象的自身内容 
# 这些方法会创建新的对象并返回 这样 就保证了不可变对象本身是不可变的

# 导入方法 并调用
from fun import abs
print(abs(-3))