def solution(numbers):
    size = len(numbers)
    arr = []
    for i in range(size-1):
        for j in range(1, size-i):
            arr.append(numbers[i] + numbers[j+i])

    result = sorted(list(set(arr)))

    return result
