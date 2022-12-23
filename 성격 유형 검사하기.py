def solution(survey, choices):
    answer = ''
    result = {"R":0, "T":0, "C":0, "F":0, "J":0, "M":0, "A":0, "N":0}
    dic_count = {1:3, 2:2, 3:1, 4:0, 5:1, 6:2, 7:3}
    for i in range(len(survey)):
        if choices[i] <= 4:
            char = survey[i][0]
        else:
            char = survey[i][1]
        result[char] += dic_count[choices[i]]
    
    list_keys = list(result.keys())
    list_vals = list(result.values())
    
    for i in range(0, len(list_keys), 2):
        if list_vals[i+1] > list_vals[i]:
            answer += list_keys[i+1]
        else:
            answer += list_keys[i]

    return answer