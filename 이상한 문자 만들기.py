def solution(s):
    answer = s.split(" ")
    imsy = ''
    for i in answer:
        for j in range(len(i)):
            if j % 2 == 0:
                imsy += i[j].upper()
            else:
                imsy += i[j].lower()
        imsy += ' '

    return imsy[:-1]
