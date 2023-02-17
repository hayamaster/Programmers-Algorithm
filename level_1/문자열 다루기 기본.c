#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int is_numbers(char *s)
{
    int i = 0;
    while (*(s + i))
    {
        if (*(s + i) < '0' || *(s + i) > '9')
            return 0;
        i++;
    }
    return 1;
}

bool solution(const char *s)
{
    if (is_numbers(s) && (strlen(s) == 4 || strlen(s) == 6))
        return true;
    return false;
}