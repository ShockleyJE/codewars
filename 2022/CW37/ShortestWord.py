# https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/python

def find_short(s):
    words = list(s.split(' '))
    length_counts = [word.__len__() for word in words]
    return min(length_counts) # l: shortest word length

print(find_short("turns out random test cases are easier than writing out basic ones")) 
# 3
