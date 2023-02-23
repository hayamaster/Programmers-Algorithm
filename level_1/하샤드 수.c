#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

bool solution(int x)
{
    int imsy = x;
    int num = 0;
    while (imsy)
    {
        num += imsy % 10;
        imsy /= 10;
    }
    if (x % num == 0)
        return true;
    return false;
}