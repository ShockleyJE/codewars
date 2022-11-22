def remove_consecutive_duplicates(s):

    if not s or len(s) == 1: return s
    
    # split into list of strings
    spl = s.split(' ')
    
    # create a stack, init empty
    stack = [spl[0]]
    
    # create return array to concatenate together, init empty
    rarr = [spl[0]]
    
    # for each in source list, if it equals stack.top continue otherwise stack add, and return list append
    for s in spl:
        if s == stack[-1]:
            continue
        else:
            stack.pop()
            stack.append(s)
            rarr.append(s)
    
    return ' '.join(rarr)