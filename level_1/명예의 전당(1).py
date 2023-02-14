def solution(k, score):
    answer = []
    arr = []
    for i in score:
        arr.append(i)
        arr = sorted(arr, reverse=True)
        arr = arr[:k]
        answer.append(min(arr))
    return answer