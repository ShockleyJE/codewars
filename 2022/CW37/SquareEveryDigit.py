def square_digits(num):
    split = [*str(num)]
    to_return = ""
    for char in split:
        res = int(char)**2
        to_return += str(res)
    return int(to_return)