def solution(n, lost, reserve):
    cross = list(set(lost) & set(reserve))
    for i in cross:
        lost.remove(i)
        reserve.remove(i)

    lost_copy1 = lost[:]
    lost_copy2 = lost[:]
    reserve_copy1 = reserve[:]
    reserve_copy2 = reserve[:]
    for i in lost:
        if i-1 in reserve_copy1:
            lost_copy1.remove(i)
            reserve_copy1.remove(i-1)
        elif i+1 in reserve_copy1:
            lost_copy1.remove(i)
            reserve_copy1.remove(i+1)
    for i in lost:
        if i+1 in reserve_copy2:
            lost_copy2.remove(i)
            reserve_copy2.remove(i+1)
        elif i-1 in reserve_copy2:
            lost_copy2.remove(i)
            reserve_copy2.remove(i-1)
    return n - min(len(lost_copy1), len(lost_copy2))
