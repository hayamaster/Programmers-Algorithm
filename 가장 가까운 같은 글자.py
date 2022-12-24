def solution(s):
    arr = []
    answer = []
    for i in range(len(s)):
        if s[i] not in arr:
            arr.append(s[i])
            answer.append(-1)
        else:
            imsy = []
            for j in range(len(s[:i])):
                if s[i] == s[j]:
                    imsy.append(j)
            answer.append(i - max(imsy))
            
    return answer