def solution(dartResult):
    dartResult = dartResult.replace("10",'A')
    stack = []
    bonus = {"S":1, 'D':2, 'T':3}
    
    for i in dartResult:
        if i == 'A' or i.isdigit():
            stack.append(10 if i=='A' else int(i))
        
        elif i in ('S', 'D', 'T'):
            num = stack.pop()
            stack.append(num ** bonus[i])
        
        elif i == "#":
            stack[-1] *= -1
            
        elif i == "*":
            num = stack.pop() * 2
            if len(stack):
                stack[-1] *= 2
            stack.append(num)
            

    answer = stack[0] + stack[1] + stack[2]
    
    return answer