def solution(strings, n):
    answer = []
    dic = {}
    for i in range(len(strings)):
        dic[strings[i]] = ord(strings[i][n])
    arr = sorted(sorted(dic.items()), key=lambda x: x[1])
    for i in arr:
        answer.append(i[0])
    return answer
