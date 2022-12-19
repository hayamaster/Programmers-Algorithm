import numpy as np
def solution(arr1, arr2):
    imsy1 = np.array(arr1)
    imsy2 = np.array(arr2)
    answer = imsy1+imsy2
    
    return answer.tolist()