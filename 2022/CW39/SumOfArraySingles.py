#You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
#
#For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

from functools import reduce


def repeats(arr):
    sparse_nums = []
    # for loop, iterate over each element
    for i in range(0,len(arr)):
        #  if count the instances of arr[idx] < 2
        if arr.count(arr[i]) ==1:
            # push arr[idx] on sparse_nums
            sparse_nums.append(arr[i])
            # if len(sparse_nums) == 2
            if len(sparse_nums) == 2:
                print(f"ready to return, sn = {sparse_nums}")
                return reduce(lambda x,y: x+y, sparse_nums, 0)
                # return reduced sum of sparse nums


print(f"{repeats([4,5,7,5,4,8])} should equal # ,15")
print(f"{repeats([9, 10, 19, 13, 19, 13])} should equal # ,19")
print(f"{repeats([16, 0, 11, 4, 8, 16, 0, 11])} should equal # ,12")
print(f"{repeats([5, 17, 18, 11, 13, 18, 11, 13])} should equal # ,22")
print(f"{repeats([5, 10, 19, 13, 10, 13])} should equal # ,24")