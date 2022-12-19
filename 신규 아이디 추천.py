import re


def solution(new_id):

    imsy2 = re.sub('[^a-z\d\-\_\.]', '', new_id.lower())
    imsy2 = re.sub('\.\.+', '.', imsy2)
    imsy2 = re.sub('^\.|\.$', '', imsy2)
    if not imsy2:
        imsy2 = "a"
    imsy2 = re.sub('\.$', '', imsy2[:15])
    while len(imsy2) < 3:
        imsy2 += imsy2[-1]
    return imsy2
