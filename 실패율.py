from collections import Counter


def solution(N, stages):

    counter = Counter(stages)
    fail_rate = [0] * (N+1)
    arr = [0] * (N+2)
    for i in stages:
        for j in range(1, i+1):
            arr[j] += 1
    for i in range(1, N+1):
        if counter[i] != 0:
            fail_rate[i] = counter[i] / arr[i]
    result = []
    fail_rate[0] = -10
    for i in range(1, len(fail_rate)):
        result.append(fail_rate.index(max(fail_rate)))
        fail_rate[fail_rate.index(max(fail_rate))] = -1

    return result
