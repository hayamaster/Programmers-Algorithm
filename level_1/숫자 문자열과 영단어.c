#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(const char *s)
{
    int answer = 0;
    char arr[10][6] = {"zero", "one", "two", "three", "four",
                       "five", "six", "seven", "eight", "nine"};
    int idx = 0;
    while (idx < strlen(s))
    {
        if ('0' <= *(s + idx) && *(s + idx) <= '9')
        {
            answer = answer * 10 + *(s + idx) - 48;
            idx++;
        }
        else
        {
            for (int i = 0; i < 10; i++)
            {
                if (*(s + idx) == arr[i][0] && *(s + idx + 1) == arr[i][1])
                {
                    idx += strlen(arr[i]);
                    answer = answer * 10 + i;
                    break;
                }
            }
        }
    }
    return answer;
}