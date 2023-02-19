#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int length(long long n)
{
    int len = 0;
    while (n)
    {
        len++;
        n /= 10;
    }
    return len;
}

int *solution(long long n)
{
    int size = length(n);
    int *answer = (int *)malloc(sizeof(int) * size);
    for (int i = 0; i < size; i++)
    {
        answer[i] = n % 10;
        n /= 10;
    }
    return answer;
}