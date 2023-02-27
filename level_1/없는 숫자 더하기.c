#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int numbers[], size_t numbers_len)
{
    int answer = 0;
    int count;
    for (int i = 0; i < 10; i++)
    {
        count = 0;
        for (int j = 0; j < numbers_len; j++)
        {
            if (i == numbers[j])
                break;
            count++;
        }
        if (count == numbers_len)
            answer += i;
    }
    return answer;
}