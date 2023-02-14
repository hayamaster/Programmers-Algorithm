def solution(numbers, hand):
    result = ''
    keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    }
    left = keypad['*']
    right = keypad['#']

    for i in numbers:
        if i in (1, 4, 7):
            result += "L"
            left = keypad[i]
        elif i in (3, 6, 9):
            result += "R"
            right = keypad[i]
        else:
            left_dist = abs(keypad[i][0]-left[0]) + abs(keypad[i][1]-left[1])
            right_dist = abs(keypad[i][0]-right[0]) + \
                abs(keypad[i][1]-right[1])
            print("left ->", left_dist)
            print("right ->", right_dist)
            if left_dist < right_dist:
                result += "L"
                left = keypad[i]
            elif right_dist < left_dist:
                result += "R"
                right = keypad[i]
            else:
                if hand == "left":
                    result += "L"
                    left = keypad[i]
                else:
                    result += "R"
                    right = keypad[i]

    return result
