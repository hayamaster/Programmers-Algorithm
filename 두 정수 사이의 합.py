def solution(a, b):
    if a == b:
        return a
    if a > b:
        temp = a
        a = b
        b = temp
    sum = 0
    for i in range(a, b+1):
        sum += i

    return sum
