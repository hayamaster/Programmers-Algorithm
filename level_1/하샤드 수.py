def solution(x):
    divisor = sum([int(i) for i in list(str(x))])
    return (True if x % divisor == 0 else False)
