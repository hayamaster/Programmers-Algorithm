def solution(my_string, m, c):
    answer = ''
    for index in range(len(my_string) // m):
        answer += my_string[m * index + c - 1]
    return answer