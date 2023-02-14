def solution(array, commands):
    result = []
    for i in range(len(commands)):
        arr = commands[i]
        imsy = sorted(array[arr[0]-1:arr[1]])
        result.append(imsy[arr[2]-1])
    return result
