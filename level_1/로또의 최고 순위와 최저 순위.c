#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int *solution(int lottos[], size_t lottos_len, int win_nums[], size_t win_nums_len)
{
    int result[7] = {6, 6, 5, 4, 3, 2, 1};
    int *answer = (int *)malloc(sizeof(int) * 2);
    int same_cnt = 0;
    int zero_cnt = 0;
    for (int i = 0; i < lottos_len; i++)
    {
        if (lottos[i] == 0)
        {
            zero_cnt++;
            continue;
        }
        for (int j = 0; j < win_nums_len; j++)
        {
            if (lottos[i] == win_nums[j])
            {
                same_cnt++;
                break;
            }
        }
    }
    answer[0] = result[same_cnt + zero_cnt];
    answer[1] = result[same_cnt];
    return answer;
}