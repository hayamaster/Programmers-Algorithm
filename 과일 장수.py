def solution(k, m, score):
    answer = 0
    score = sorted(score, reverse=True)
    for i in range(0, len(score), m):
        arr = score[i:m + i]
        if len(arr) == m:
            answer += min(arr) * m
            
    return answer