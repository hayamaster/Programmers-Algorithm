#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int strlen(char *s)
{
    int i;
    while (*(s + i))
        i++;
    return (i);
}

char *solution(const char *s)
{
    int idx = 0;
    char imsy;
    char *str = (char *)malloc(sizeof(char) * strlen(s) + 1);
    while (*(s + idx))
    {
        str[idx] = *(s + idx);
        idx++;
    }
    str[idx] = '\0';
    for (int i = 0; i < strlen(str); i++)
    {
        for (int j = i + 1; j < strlen(str); j++)
        {
            if (*(str + i) < *(str + j))
            {
                imsy = *(str + i);
                *(str + i) = *(str + j);
                *(str + j) = imsy;
            }
        }
    }
    return str;
}