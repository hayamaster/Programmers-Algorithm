def solution(l, r):
    answer = []
    numbers = ["0", "5"]
    for num in range(l, r + 1):
        if num % 5 == 0:
            is_answer = True
            for char in str(num):
                if char not in numbers:
                    is_answer = False
                    break
            if is_answer:
                answer.append(num)
    return answer or [-1]