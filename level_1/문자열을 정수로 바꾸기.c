#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(const char *s)
{
    int i = 0;
    int buho = 1;
    long long num = 0;
    while (*(s + i) == '+' || *(s + i) == '-')
    {
        if (*(s + i) == '-')
            buho = -buho;
        i++;
    }
    while (*(s + i))
    {
        num = num * 10 + (s[i] - '0');
        i++;
    }
    return buho * num;
}