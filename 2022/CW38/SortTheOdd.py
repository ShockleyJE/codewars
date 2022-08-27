def sort_array(source_array):
    copied_arr = source_array.copy() # [5, 3, 2, 8, 1, 4]
    odds_arr = list(filter(lambda x: x%2 != 0, copied_arr)) #[5, 3, 1]
    odds_arr.sort() #[1,3,5]
    sorted = odds_arr #[1,3,5]
    return_arr = [None if x in odds_arr else x for x in copied_arr] # [5, 3, 2, 8, 1, 4]
    return_arr = [sorted.pop(0) if x == None else x for x in return_arr ]
    return return_arr