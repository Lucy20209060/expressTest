# filter()接收一个函数 和 一个序列
# 把传入的函数依次作用于每个元素，根据函数返回值是True还是False,然后保留或删除该元素

def is_odd(n):
	return n % 2 == 1

# 过滤出序列的所有奇数元素
li1 = list(filter(is_odd,[1,2,3,4,5,6,7,8,9,10]))
print(li1)