def solution(arr):
    if arr[:-1]:
        arr.remove(min(arr))
        return arr
    return [-1]
