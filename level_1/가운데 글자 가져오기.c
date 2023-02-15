#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int strlength(char *s)
{
    int i = 0;
    while (*(s + i))
        i++;
    return (i);
}

char *solution(const char *s)
{
    if (strlength(s) % 2 == 1)
    {
        char *answer = (char *)malloc(sizeof(char) * 1);
        answer[0] = s[(int)(strlength(s) / 2)];
        answer[1] = '\0';
        return answer;
    }
    char *answer = (char *)malloc(sizeof(char) * 2);
    answer[0] = s[(int)(strlength(s) / 2 - 1)];
    answer[1] = s[(int)(strlength(s) / 2)];
    answer[2] = '\0';
    return answer;
}