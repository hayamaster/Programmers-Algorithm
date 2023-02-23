#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

char *solution(const char *phone_number)
{
    int check = 1;
    int size = strlen(phone_number);
    char *answer = (char *)malloc(sizeof(char) * size + 1);
    for (int i = size - 1; i >= 0; i--)
    {
        if (check > 4)
            answer[i] = '*';
        else
            answer[i] = phone_number[i];
        check++;
    }
    answer[size] = '\0';
    return answer;
}