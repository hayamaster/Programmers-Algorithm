from itertools import *
import math


def IsPrime(num):
    for i in range(2, int(math.sqrt(num))):
        if num % i == 0:
            return False
    return True


def solution(nums):
    arr = list(sum(list(i)) for i in combinations(nums, 3))
    count = 0
    for i in arr:
        if IsPrime(i):
            count += 1
    return count
