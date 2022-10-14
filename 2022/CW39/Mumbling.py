# https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python
def accum(s):
    #split on each character into an array (split)
    #lowercase each character in the array (map/lc tolowercase)
    #repeat x times where x is the index position (repeat or times, enumed lc)
    #uppercase the first character in each string in the array (map/lc tolowercase)
    #join together with - (join)
    ls = [c for c in s]
    print(f"splitted: {ls}")
    ls = [s.lower() for s in ls]
    print(f"lowered: {ls}")
    ls = [c * (i+1) for i,c in enumerate(ls)]
    print(f"repeated: {ls}")
    ls = list(ls[0].upper()) + list(map(lambda seq: seq[0].upper() + seq[1:] ,ls[1:]))
    print(f"uppercased first: {ls}")
    ls = '-'.join(ls)
    print(f"joinded: {ls}")
    return ls