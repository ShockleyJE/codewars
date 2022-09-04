# https://www.codewars.com/kata/5656b6906de340bd1b0000ac/python

def longest(a1, a2):
    letters = "abcdefghijklmnopqrstuvwxyz"
    concatted = a1+a2
    unique = ''.join([c for c in letters if c in concatted])
    print(unique)
    return unique


print(longest("aretheyhere", "yestheyarehere"))