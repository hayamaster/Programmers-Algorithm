def solution(arr):
    answer = []

    answer.append(arr[0])
    for i in range(1, len(arr)):
        if arr[i] == answer[len(answer) - 1]:
            continue
        answer.append(int(arr[i]))

    return answer
