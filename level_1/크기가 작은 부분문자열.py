def solution(t, p):
    arr = []
    while len(t) >= len(p):
        arr.append(t[:len(p)])
        t = t[1:]
        
    return len(list(filter(lambda x : int(x) <= int(p), arr)))