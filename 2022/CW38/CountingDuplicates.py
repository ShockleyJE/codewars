# https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/python

def duplicate_count(text):
    # Your code goes here
    lower_text = list(c.lower() for c in text)
    unique = list(set(lower_text))
    unique_multiple = [c for c in unique if lower_text.count(c) > 1]
    return len(unique_multiple)

print(duplicate_count("Indivisibilities"))