import math


def solution(n):
    return (-1 if not math.sqrt(n).is_integer() else (math.sqrt(n)+1)**2)
