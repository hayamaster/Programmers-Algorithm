#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

char* solution(int a, int b) {
    int dic[13] = {31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    char    week[7][3] = {"THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"};
    int total_days = 0;
    for (int i = 0; i < a - 1; i++)
        total_days += dic[i];
    total_days += b;
    char* answer = (char*)malloc(sizeof(char) * 3);
    for (int j = 0; j < 3; j++)
        answer[j] = week[total_days % 7][j];
    answer[3] = '\0';
    return answer;
}