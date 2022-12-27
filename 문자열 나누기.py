def solution(s):
    answer = 0
    arr = ['', 0, 0]
    for i in s:
        if arr[0] == '':
            arr[0] = i
            arr[1] += 1
        else:
            if arr[0] == i:
                arr[1] += 1
            else:
                arr[2] += 1
            if arr[1] == arr[2]:
                answer += 1
                arr = ['', 0, 0]
    if arr != ['', 0, 0]: answer += 1
    return answer