#https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python
def get_count(sentence):
    vowels = ['a','e','i','o','u']
    vowel_in = list([letter for letter in sentence if letter in vowels])
    return vowel_in.__len__()

get_count("Sample tests")