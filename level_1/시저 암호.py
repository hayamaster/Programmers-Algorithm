def solution(s, n):
    answer = ''
    for i in s:
        if i == " ":
            answer += i
        elif ord(i) in range(64, 91) and ord(i)+n not in range(64, 91):
            answer += chr(ord(i) + n - 26)
        elif ord(i) in range(97, 123) and ord(i)+n not in range(97, 123):
            answer += chr(ord(i) + n - 26)
        elif i.isalpha():
            answer += chr(ord(i) + n)
    return answer
