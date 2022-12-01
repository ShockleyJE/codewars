def dup(s):
    def dedup(s):
        if len(s) <= 1: return s

        r_s = [s[0]]

        for i, c in enumerate(s):
            if c != r_s[-1]: 
                r_s.append(c)
        print(f"returning: {''.join(r_s)}")
        return ''.join(r_s)
    
    return list(map(dedup, s))

print(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]))