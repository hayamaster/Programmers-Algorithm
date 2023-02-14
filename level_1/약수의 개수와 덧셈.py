def solution(left, right):
    arr = [i for i in range(left, right+1)]
    count = 0
    for i in arr:
        imsy = []
        for j in range(1, i+1):
            if i % j == 0:
                imsy.append(j)
        if len(imsy) % 2 == 0:
            count += i
        else:
            count -= i

    return count
