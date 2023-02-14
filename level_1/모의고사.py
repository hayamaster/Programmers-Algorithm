def solution(answers):
    supo1 = 0
    supo2 = 0
    supo3 = 0
    arr1 = [1, 2, 3, 4, 5]
    arr2 = [2, 1, 2, 3, 2, 4, 2, 5]
    arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    for i in range(len(answers)):
        if answers[i] == arr1[i % len(arr1)]:
            supo1 += 1
        if answers[i] == arr2[i % len(arr2)]:
            supo2 += 1
        if answers[i] == arr3[i % len(arr3)]:
            supo3 += 1

    result = [supo1, supo2, supo3]
    maxs = max(result)

    final = []
    for i in range(len(result)):
        if maxs == result[i]:
            final.append(i+1)

    return final
