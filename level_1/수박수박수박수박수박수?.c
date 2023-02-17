#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

void strcat(char *s1, char *s2)
{
    int i = 0;
    int j = 0;
    while (*(s1 + i))
        i++;
    while (*(s2 + j))
    {
        *(s1 + i) = *(s2 + j);
        i++;
        j++;
    }
    s1[i] = '\0';
}

char *solution(int n)
{
    char *str = (char *)calloc((3 * n) + 1, sizeof(char));
    char *imsy1 = "수";
    char *imsy2 = "박";
    for (int i = 0; i < n; i++)
    {
        if (i % 2 == 0)
            strcat(str, imsy1);
        else
            strcat(str, imsy2);
    }
    str[3 * n] = '\0';
    return str;
}