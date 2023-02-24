#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int nums[], size_t nums_len)
{
    int answer = 0;
    for (int i = 0; i < nums_len - 2; i++)
    {
        for (int j = i + 1; j < nums_len - 1; j++)
        {
            for (int k = j + 1; k < nums_len; k++)
            {
                int imsy = nums[i] + nums[j] + nums[k];
                for (int l = 2; l <= imsy; l++)
                {
                    if (l == imsy)
                        answer += 1;
                    if (imsy % l == 0)
                        break;
                }
            }
        }
    }
    return answer;
}