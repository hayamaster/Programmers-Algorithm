def three(n):
    imsy = ''
    while n > 0:
        imsy += str(n%3)
        n = n // 3
    return imsy[::-1]

def solution(n):
    answer = list(three(n))
    
    dic = {"1":"0" , "2":"1", "4":"2"}
    
    while "0" in answer[1:]:
        for i in range(1, len(answer)):
            if answer[i] == "0":
                answer[i] = "4"
                answer[i-1] = dic[answer[i-1]]
    answer = "".join(answer)
    if answer[0] == '0':
        answer = answer[1:]
    return answer