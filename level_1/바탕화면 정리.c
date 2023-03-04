#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int *solution(const char *wallpaper[], size_t wallpaper_len)
{
    int *answer = (int *)malloc(sizeof(int) * 4);
    memset(answer, -1, 4 * sizeof(int));
    int idx = 0;
    while (answer[0] == -1 || answer[2] == -1)
    {
        for (int i = 0; i < strlen(wallpaper[0]); i++)
        {
            if (answer[0] == -1 && wallpaper[idx][i] == '#')
                answer[0] = idx;
            if (answer[2] == -1 && wallpaper[wallpaper_len - idx - 1][i] == '#')
                answer[2] = wallpaper_len - idx;
        }
        idx++;
    }
    idx = 0;
    while (answer[1] == -1 || answer[3] == -1)
    {
        for (int i = 0; i < wallpaper_len; i++)
        {
            if (answer[1] == -1 && wallpaper[i][idx] == '#')
                answer[1] = idx;
            if (answer[3] == -1 && wallpaper[i][strlen(wallpaper[0]) - idx - 1] == '#')
                answer[3] = strlen(wallpaper[0]) - idx;
        }
        idx++;
    }
    return answer;
}