#https://www.codewars.com/kata/5277c8a221e209d3f6000b56/python

def valid_braces(string):
  open = ('(', '{', '[')
  close = (')', '}', ']')
  stack = []

  for c in string:
    if c in close:
        c_pair = stack.pop()
        if close.index(c) == open.index(c_pair):
            print(f"{c} matches to {c_pair}")
        else:
            print(f"{c} does not match to {c_pair}")
            return False
    elif c in open:
        stack.append(c)
    else: 
        return False

  if len(stack) == 0:
    return True
  return False


print(f"returned {valid_braces("()")}")
print(f"returned {valid_braces("(}")}")
print(f"returned {valid_braces("[(]")}")
print(f"returned {valid_braces("{}()[]")}")