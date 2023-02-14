from collections import Counter

def solution(X, Y):
    arr = list((Counter(X) & Counter(Y)).elements())
    zero_cnt = 0
    for i in arr:
        if (i == "0"): zero_cnt += 1 
    
    arr.sort(reverse=True)
    answer = "".join(arr)
    if (len(arr) == 0):
        return "-1"
    elif (zero_cnt == len(arr)):
        return "0"
    else:
        return answer