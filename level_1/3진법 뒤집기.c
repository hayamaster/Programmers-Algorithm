#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n)
{
    int answer = 0;
    long long num_three = 0;
    int i = 0;
    while (n)
    {
        num_three = num_three * 10 + n % 3;
        n /= 3;
    }
    while (num_three)
    {
        if (i == 0)
            answer += num_three % 10;
        else
            answer += pow(3, i) * (num_three % 10);
        num_three /= 10;
        i++;
    }
    return answer;
}