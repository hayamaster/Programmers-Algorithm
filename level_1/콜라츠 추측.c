#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int collatz(long long num, int cnt)
{
    printf("%d", cnt);
    if (num == 1)
        return cnt;
    if (cnt == 500)
        return -1;
    num % 2 == 0 ? collatz(num / 2, cnt + 1) : collatz(3 * num + 1, cnt + 1);
}

int solution(int num)
{
    return collatz(num, 0);
}