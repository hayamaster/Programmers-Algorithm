def solution(s):
    if s[0] == ')' or s[-1] == '(': return False 
    
    stack = [1]
    for i in s:
        if not stack: return False
        elif i == "(":
            stack.append(1)
        else: 
            stack.pop()
    if len(stack) > 1: return False        
    return True