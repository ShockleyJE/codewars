def absent_vowel(x): 
    cmap = {
        'a' : 0,
        'e' : 1,
        'i' : 2,
        'o' : 3,
        'u' : 4,
    }
    unseen = set(cmap.keys())
    
    for c in x:
        if c in unseen: unseen.remove(c)
        if len(unseen)==1: return cmap[unseen.pop()]