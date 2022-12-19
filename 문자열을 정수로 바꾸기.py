def solution(s):
    if s.isdigit():
        return int(s)
    return (-int(s[1:]) if s[0] == '-' else int(s[1:]))
