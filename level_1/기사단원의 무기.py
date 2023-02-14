def solution(number, limit, power):
    answer = 1
    for i in range(2, number+1):
        count = 0
        for j in range(1, int(i**(1/2))+1):
            if i % j == 0:
                if i // j == j:
                    count += 1
                else:
                    count += 2
        if count > limit:
            answer += power
        else: 
            answer += count
    return answer