def lovefunc( flower1, flower2 ):
    iseven = lambda x: x % 2 == 0
    isodd = lambda x: x % 2 != 0
    
    if iseven(flower1) and isodd(flower2):
        return True
    elif isodd(flower1) and iseven(flower2):
        return True
    else:
        return False