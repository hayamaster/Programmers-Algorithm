def solution(phone_number):
    answer = "".join(["*" for _ in range(len(phone_number)-4)]) 
    return answer + phone_number[-4:]