def collatz(num, count):
    if num == 1:
        return count
    if count > 500:
        return -1
    if num % 2 == 0:
        num /= 2
        count += 1
        return collatz(num, count)
    else:
        num = num * 3 + 1
        count += 1
        return collatz(num, count)


def solution(num):
    count = 0
    if num == 1:
        return 0
    result = collatz(num, count)
    return result
