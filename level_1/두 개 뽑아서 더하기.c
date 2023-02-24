#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int get_length(int numbers[], size_t numbers_len)
{
    int length = 0;
    for (int i = numbers_len - 1; i > 0; i--)
        length += i;
    return length;
}

int is_duplicated(int *answer, int length, int num)
{
    for (int i = 0; i < length; i++)
    {
        if (answer[i] == num)
            return 1;
    }
    return 0;
}

void sort_arr(int *answer, int length)
{
    int temp;
    for (int i = 0; i < length - 1; i++)
    {
        for (int j = i + 1; j < length; j++)
        {
            if (answer[i] > answer[j])
            {
                temp = answer[i];
                answer[i] = answer[j];
                answer[j] = temp;
            }
        }
    }
}

int *solution(int numbers[], size_t numbers_len)
{
    int length = get_length(numbers, numbers_len);
    int *answer = (int *)malloc(sizeof(int) * length);
    int idx = 0;
    memset(answer, -1, sizeof(int) * length);
    for (int i = 0; i < numbers_len - 1; i++)
    {
        for (int j = i + 1; j < numbers_len; j++)
        {
            if (!is_duplicated(answer, length, numbers[i] + numbers[j]))
            {
                answer[idx] = numbers[i] + numbers[j];
                idx++;
            }
        }
    }
    sort_arr(answer, idx);
    return answer;
}