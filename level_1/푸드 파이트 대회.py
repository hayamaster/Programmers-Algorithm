def solution(food):
    answer = ''
    arr = list(map(lambda x : (x//2)*2, food))
    for i in range(1, len(arr)):
        for j in range(arr[i]//2):
            answer += str(i)
            
    return answer + '0' + answer[::-1]