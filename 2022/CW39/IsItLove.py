# https://www.codewars.com/kata/555086d53eac039a2a000083/train/python
def lovefunc( flower1, flower2 ):
    iseven = lambda x: x % 2 == 0
    isodd = lambda x: x % 2 != 0
    
    if iseven(flower1) and isodd(flower2):
        return True
    elif isodd(flower1) and iseven(flower2):
        return True
    else:
        return False