def solution(d, budget):
    d.sort()
    count = 0
    for i in d:
        if budget < 0:
            break
        budget -= i
        count += 1

    if budget < 0:
        count -= 1

    return count
