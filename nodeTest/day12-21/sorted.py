# 排序算法 对list进行排序
# 从小到大排序
li1 = sorted([8,4,-34,32,124,6,-2,56])
print(li1)

# sorted()也是高阶函数 可以接收一个key函数来实现自定义的排序
# 按绝对值的大小排序
li2 = sorted([8,4,-34,32,124,6,-2,56],key=abs)
print(li2)

sorted(['bob', 'about', 'Zoo', 'Credit'])
# ['Credit', 'Zoo', 'about', 'bob']
# 默认情况下，对字符串排序，是按照ASCII的大小比较的，由于'Z' < 'a'，结果，大写字母Z会排在小写字母a的前面。