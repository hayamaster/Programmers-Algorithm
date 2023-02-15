#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

long long solution(int a, int b)
{
    long long answer = 0;
    int first;
    int last;
    if (a > b)
    {
        first = b;
        last = a;
    }
    else if (a < b)
    {
        first = a;
        last = b;
    }
    else if (a == b)
        return a;
    for (int i = first; i < last + 1; i++)
        answer += i;
    return answer;
}