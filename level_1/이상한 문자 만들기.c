#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

char *solution(const char *s)
{
    int check = 0;
    char *answer = (char *)malloc(sizeof(char) * strlen(s) + 1);
    for (int i = 0; i < strlen(s); i++)
    {
        if (s[i] == ' ')
        {
            check = 0;
            answer[i] = s[i];
            continue;
        }
        if (check % 2 == 0)
        {
            if (97 <= s[i] && s[i] <= 122)
                answer[i] = s[i] - 32;
            else
                answer[i] = s[i];
        }
        else
        {
            if (65 <= s[i] && s[i] <= 90)
                answer[i] = s[i] + 32;
            else
                answer[i] = s[i];
        }
        check++;
    }
    answer[strlen(s)] = '\0';
    return answer;
}