import math


def solution(n):
    stack = []
    while n > 0:
        imsy = n % 3
        stack.append(int(imsy))
        n = math.floor(n / 3)

    num10 = 0
    for i in range(len(stack)):
        num10 += math.pow(3, len(stack)-i-1) * stack[i]

    return num10
