from itertools import combinations
def solution(number):
    return list(map(lambda x : sum(x), list(combinations(number,3)))).count(0)