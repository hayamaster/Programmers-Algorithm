def solution(babbling):
    mal = ["aya", "ye", "woo", "ma"]
    answer = 0
    for i in babbling:
        imsy = mal[:]
        j = 0
        while j < len(imsy):
            word = imsy[j]
            if (i.startswith(word)):
                i = i[len(word) :]
                imsy = mal[:]
                imsy.remove(word)
                j = -1
            j += 1
        if (i == ""):
            answer += 1
    return answer